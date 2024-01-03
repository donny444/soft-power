const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        minLength: 2,
        maxLength: 20,
        required: true
    },
    password: {
        type: String,
        maxLength: 60,
        required: true
    }
})

const User = model("User", userSchema);
module.exports = User;