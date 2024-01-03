const mongoose = require("mongoose");
const { Schema, SchemaTypes, model } = mongoose;

const thingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    region: String,
    spicy: Boolean,
    genres: String,
    description: {
        type: String,
        required: true
    },
    path: String,
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    updatedAt: Date,
    comments: [{
        user: {
            type: SchemaTypes.ObjectId,
            ref: "User"
        },
        detail: String
    }]
});

thingSchema.pre("save", function(next) {
    this.updatedAt = Date.now();
    next();
})

const Thing = model("Thing", thingSchema);
module.exports = Thing;