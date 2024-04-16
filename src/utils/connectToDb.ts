"use server"


import mongoose from "mongoose"


export const connectToDB = () => {

    mongoose.connect(process.env.MONGODB_URL || "").then((value)=>{console.log("Connection Established")}).catch(()=>{console.log("Connection Failed")})
}