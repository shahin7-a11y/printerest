import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  Title: {
    type: String,
  },
  Board: {
    type: String,
  },
  Discription: {
    type: String,
  },
  image: {
    type: String, 
  },
  like:{
    type:String,
    default:false
  },
  isdeleted:{
    type:String,
    default:false
  }
});


const imageschema = mongoose.model("Image", imageSchema);

export  {imageschema};
