const Comment = require("../model/comment_model.js");

async function AddComment(req, res) {
    const { thing } = req.params;
    const { user, username, detail } = req.body;
    
    try {
        if(!detail) {
            return res.status(406).json({ message: "Comment detail is required" });
        }
        if(detail.length > 100) {
            return res.status(406).json({ message: "Comment is limited to 100 characters" });
        }

        const addComment = new Comment({
            user,
            username,
            thing,
            detail
        });
        await addComment.save();

        return res.status(201).json({ addComment });

    } catch(err) {
        console.error(err);
        return res.status(500).json({ message: "Unexpected Error" });
    }
}

module.exports = AddComment;