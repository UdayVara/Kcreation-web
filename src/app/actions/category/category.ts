"use server"

import { Category } from "@/models/Category"
import { connectToDB } from "@/utils/connectToDb"

export const addCategory = async(payload:{name:string,description:string,gender:string}) => {
    connectToDB()

    const res = await Category.create({
        ...payload
    })

    if(res){
        return {success:true,message:"Category Added"}
    }else{
        return {success:false,message:"Failed to Add Category"}
    }
}


export const getAllCategory = async() => {
    connectToDB()
    const res = await Category.find({})

    if(res){
        return {success:true,message:"Categories Fetched Successfully",category:res}
    }else{
        return {success:false,message:"Categories Does not Exist"}
    }
}

