const Thing = require("../model/thing_model.js");

async function Things(req, res) {
    try {
        const data = await Thing.find();
        return res.status(200).json(data);
    } catch(err) {
        console.error(err);
    }
}

async function SpecificThing(req, res) {
    const _id = req.params._id;
    try {
        const data = await Thing.findOne({ _id });
        return res.status(200).json(data);
    } catch(err) {
        console.error(err);
        return res.status(500).json({ message: "Unexpected Error"});
    }
}

module.exports = { Things, SpecificThing };