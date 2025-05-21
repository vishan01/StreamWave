import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        index:true,
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        index:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    }, 
    avatar:{
        type:String,
        default:"https://i.pinimg.com/736x/8e/77/69/8e77695f76f0b51f0d82c1060d858e9f.jpg",
    },
    coverImage:{
        type:String,
    },
    
})

export const User= mongoose.model("User",UserSchema)