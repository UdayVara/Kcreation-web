"use server"

import { User } from "@/models/User"
import { auth, signIn, signOut } from "../../../../auth"


export const signInUser = async(data:{name:string,email:string,password:string}) => {

    console.log("Route Hitted",data)
    
    const res = await signIn("credentials",{...data,redirect:false})
    
    try {
        return {success:true,message:"User Signed In"}
        
    } catch (error) {
        return {success:false,message:error?.toString()}
    }

}


export const UpdateUser =  async(data:{name:string,email:string,password:string,id:string}) => {
    const res = await User.findByIdAndUpdate(data.id,{name:data.name,email:data.email,password:data.password})

    if(res){
        await signInUser({name:data.name,email:data.email,password:data.password})
        return {success:true,message:"User Updated"}
    }else{
        return {success:false,message:"Failed to Update"}
    }
}

export const getUser = async() => {
    const user = await auth()
    return user
}

export const signOutUser = async() => {
    await signOut({redirect:false})
}