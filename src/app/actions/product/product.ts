"use server"
import { Category } from "@/models/Category"
import { Product } from "@/models/Product"
import { connectToDB } from "@/utils/connectToDb"

export const addProduct = async(data:{name:string,category:string,description:string,price:Number,discount:Number,image:String}) => {
    connectToDB()
    const res = await Product.create({
        ...data
    })

    if(res){
        return {success:true,message:"Product Added Successfully."}
    }else{
        return {success:false,message:"Internal Server Failure"}
    }
}


export const getProducts = async(data:{name:string,category:string,gender:string}) => {
    connectToDB()
    
    const {name,category,gender} = data
    
    let filter:any = {};
    if(name != "") filter.name = { $regex: name, $options: "i" }
    
    if(category != "") filter.category = category
    
    if(gender != "") filter.gender = gender
    
    
    const res = await Product.find(filter)

    if(res){
        return {success:true,message:"Products Fetched Successfully",products:res}
    }else{
        return {success:false,message:"Failed to Get Products."}
    }
}


export const getProductById = async(data:{id:string}) => {
    connectToDB()
    
    const product = await Product.findById(data.id)
    const category = await Category.findById(product?.category)
    const temp = {...product}

    temp.categoryName = category.name
    console.log(temp.categoryName)
    
    if(product){
        return {success:true,message:"Product Found",product:JSON.stringify(temp)}
    }else{
        return {success:false,message:"Invalid Id"}
    }
}

export const getRecents = async() => {
    const products = await Product.find().sort({createdAt:-1}).limit(3)

    if(products){
        return {success:true,message:"Product Found",products:products}
    }else{
        return {success:false,message:"Failed to Get Product"}
    }
}

