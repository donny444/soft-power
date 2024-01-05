const mongoose = require("mongoose");
const Thing = require("../model/thing_model.js");

async function Things(req, res) {
    try {
        data = await Thing.find();
        return res.status(200).json(data);
    } catch(err) {
        console.error(err);
    }
}

module.exports = Things;