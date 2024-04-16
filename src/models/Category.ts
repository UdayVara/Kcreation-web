import mongoose from "mongoose"
import { Schema } from "mongoose"

const categorySchema = new Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }

},{
    timestamps:true
})


export const Category = mongoose.models?.category || mongoose.model("category",categorySchema)

