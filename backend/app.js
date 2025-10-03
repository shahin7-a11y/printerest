import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { login, sign } from "./controler/usercontroler.js";
import { addafavorites, addimage, aestheticcatagery, beachcatagery, carscatagery, deleteimage, editdatapost, editimage, Favorite, getimage, womencatagery } from "./controler/imagecontroler.js";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary"
import dotenv from 'dotenv'


cloudinary.config({
    cloud_name: 'dfhfooqx4',
    api_key: "121217735514345",
    api_secret: 'GCkXuOTYq_7wf7vcid4nKZaJXSk',
});
async function handleUpload(file) {
    const res = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
    });
    return res;
}


mongoose.connect("mongodb://localhost:27017/pintrest").then(() => {
    console.log("mongodb connected")
}).catch((Error) => {
    console.log(Error)
})

const storage = new multer.memoryStorage();

const upload = multer({ storage: storage });

const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send("hello guyyyyyyysssss");
});
app.post("/signup", sign)
app.post("/login", login)
app.post("/addimage", upload.single('image'), addimage)
app.get("/getimage", getimage)
app.get("/editimage", editimage)
app.post("/editdatapost", upload.single('image'), editdatapost)
app.post("/deleteimage", deleteimage)
app.get("/beachcatagery", beachcatagery)
app.get("/carscatagery", carscatagery)
app.get("/womencatagery",womencatagery)
app.get("/aesthetic",aestheticcatagery)
app.post("/addfavorite",addafavorites)
app.get("/favorite",Favorite)

app.listen(8000, () => {
    console.log("server is running on http://localhost:8000")
})