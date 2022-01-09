import mongoose, { Document } from "mongoose";

const Schema = mongoose.Schema;

const fileSchema = new Schema({
    filename: {
        type: String,
        required: true
    },
    secure_url: {
        type: String,
        required: true
    },
    format: {
        type: String,
        required: true
    },
    sizeInBytes: {
        type: String,
        required: true
    },
    sender: {
        type: String,
    },
    receiver: {
        type: String,
    }
}, {
    timestamps: true
})

interface IFile extends Document{
    filename: String,
    secure_url: String,
    format: String,
    sizeInBytes: String,
    sender: String,
    receiver: String
}