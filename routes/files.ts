import express from "express";
import multer from "multer";
import {UploadApiResponse, v2 as cloudinary} from "cloudinary";
import File from "../models/File";

const router = express.Router();

const storage = multer.diskStorage({});

let upload = multer({ storage });

router.post("/upload", upload.single("MyFile"), async (req, res) => {
    try {
        if(!req.file) {
           res.status(400).json({message:"No file uploaded"});
            console.log(req.file)

            let uploadedFile: UploadApiResponse

            try {
               uploadedFile =  await cloudinary.uploader.upload(req.file.path, {
                    folder: "images",
                    resource_type: "auto"
                })
            } catch (error) {
                console.log(error)

                return res.status(500).json({message: "Error uploading file"})
            }

            const { originalname } = req.file
            const {secure_url, bytes, format} = uploadedFile
        
            const file = await File.create({
                filename: originalname,
                sizeInBytes: bytes,
                secure_url,
                format   
            })

            res.status(201).json({
                id: file._id,
                downloadPageLink: `${process.env.API_END_POINT}download/${file.id}`,
            })
        }
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({message: "Server Error"});
    }
})

export default router;