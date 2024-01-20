const mongoose = require("mongoose");
const Thing = require("./model/thing_model.js");
const User = require("./model/user_model.js");
const Comment = require("./model/comment_model.js");

main().catch(err => console.error(err));

//this function is used for managing in MongoDB database
async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/soft-power");

        mongoose.connection.on("error", err => {
            console.error(err);
        })

        await Comment.deleteMany({});

    } catch(err) {
        console.error(err);
    }
}