import mongoose from "mongoose";


const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthdate: {
        type: String,
        required: true
    }
})

const userschema = mongoose.model('usercollections', schema);
export { userschema };

