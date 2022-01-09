import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({});

let upload = multer({ storage });

router.post("/upload", upload.single("MyFile"), (req, res) => {
    try {
        if(!req.file) {
           res.status(400).json({message:"No file uploaded"});
            console.log(req.file)
        }
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({message: "Server Error"});
    }
})

export default router;