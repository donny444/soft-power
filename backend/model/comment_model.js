const mongoose = require("mongoose");
const { Schema, SchemaTypes, model } = mongoose;

const commentSchema = new Schema({
    user: {
        type: SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },
    detail: {
        type: String,
        maxLength: 100,
        required: true
    }
})

const Comment = model("Comment", commentSchema);
module.exports = Comment;