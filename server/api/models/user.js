import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
    networkId: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,

    },
    lastName: { 
        type: String
    },
    email:{
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    isAdmin:{
        type: Boolean,
        default: false
    },

}, {versionKey: false})

export const User = mongoose.model("user",userSchema)

