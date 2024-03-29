const Comment = require("../model/comment_model.js");

async function ShowComments(req, res) {
    const { thing } = req.params;
    try {
        const showComments = await Comment.find({ thing });

        return res.status(200).json(showComments);
    } catch(err) {
        console.error(err);
        return res.status(500).json({ message: "Unexpected Error" });
    }
}

module.exports = ShowComments;