require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/user_model");

async function Login(req, res) {
    const { username, password } = req.body;
    try {
        if(!username || !password) {
            return res.status(406)({ message: "Username and password are required" });
        }

        //mongoose login validation with documents in 'users' collection...
        const user = await User.findOne({ username });
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const payload = { username: user.username };
        const token =jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {
                expiresIn: '1h'
            }
        )
        return res.status(200).json({ user, token });
    } catch(err) {
        console.error(err);
        return res.status(500).json({ message: "Unexpected Error" });
    }
}

module.exports = Login;