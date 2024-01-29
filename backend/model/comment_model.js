const mongoose = require("mongoose");
const { Schema, SchemaTypes, model } = mongoose;

const commentSchema = new Schema({
    user: {
        type: SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },
    username: {
        type: String,
        ref: "User",
        required: true
    },
    thing: {
        type: SchemaTypes.ObjectId,
        ref: "Thing",
        required: true
    },
    detail: {
        type: String,
        maxLength: 100,
        required: true
    },
    commentedAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    }
})

const Comment = model("Comment", commentSchema);
module.exports = Comment;