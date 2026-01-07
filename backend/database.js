require("dotenv").config();
const mongoose = require("mongoose");
const Thing = require("./model/thing_model.js");
const User = require("./model/user_model.js");
const Comment = require("./model/comment_model.js");

main().catch(err => console.error(err));

//this function is used for managing in MongoDB database
async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        mongoose.connection.on("error", err => {
            console.error(err);
        })

    } catch(err) {
        console.error(err);
    }
}