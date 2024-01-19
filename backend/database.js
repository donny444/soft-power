const mongoose = require("mongoose");
const Thing = require("./model/thing_model.js");

main().catch(err => console.error(err));

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/soft-power");

        mongoose.connection.on("error", err => {
            console.error(err);
        })

        await Thing.updateMany({}, { fileName: "sample.jpg" });

    } catch(err) {
        console.error(err);
    }
}