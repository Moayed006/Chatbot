import mongoose from 'mongoose'

const Schema = mongoose.Schema
const logSchema = new Schema({
    message:{
        type: String
    },
    sender: {
        type: String
    },
    sessionId:{
        type: String,
        requried: true,
    }
}, {timestamps: true, versionKey: false})

export const Log = mongoose.model('log', logSchema)

