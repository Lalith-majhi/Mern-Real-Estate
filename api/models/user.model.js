import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,

    },
    avatar:{
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fprofile-icon&psig=AOvVaw3_NRrJaTMNMXlzc6aRteKr&ust=1729753493422000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKi2q4f4o4kDFQAAAAAdAAAAABAJ"
    },
}, {timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;