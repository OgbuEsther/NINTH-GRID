import express from "express"
import { uploadPhoto } from "../controller/photoController"
import upload from "../config/multerConfig"

const photoRoutes = express.Router()


photoRoutes.post("/new-photo" , upload.single("photoUrl") ,  uploadPhoto)

export default photoRoutes