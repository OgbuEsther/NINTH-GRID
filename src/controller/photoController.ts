import { Request  , Response } from "express";

import { photoModel } from "../model/photoModel";

import cloudinary from "../config/cloudinary";

export const uploadPhoto = async(req :any , res:Response):Promise<void>=>{
    try {
        const {photoName , photoUrl  , details} = req.body


        const localPath = req?.file?.path!

        const result =  await cloudinary.uploader.upload(localPath , {
            folder : "uploads"
        })

        

        const newPhoto = {
            photoName, details , photoUrl : result.secure_url
        }

        const [id] = await photoModel.create(newPhoto)

       res.status(201).json({
        message : "Photo upload",
        data : newPhoto,
        id
      })
    } catch (error) {
         res.status(500).json({
            message : "Something went wrong while uploading image"
        })
    }
}