require("dotenv").config();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const User = require("../model/user_model.js");

async function Register(req, res) {
    const { username, password } = req.body;
    try {
        if(!username || !password) {
            return res.status(406).json({ message: "Username and password are required" });
        }
        if(username.length > 20) {
            return res.status(406).json({ message: "Username can't be more than 20 characters" });
        }
        if(password.length > 16) {
            return res.status(406).json({ message: "Password can't be more than 16 characters" });
        }

        //handle exists username in MongoDB 'users' collection using Mongoose
        //hash password using 10 rounds bcrypt
        const userExists = await User.findOne({ username });
        if(userExists) {
            return res.status(400).json({ message: "Username already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            password: hashedPassword
        });
        await newUser.save();

        return res.status(201).json({ message: "User registered successfully" });
    } catch(err) {
        console.error(err);
    }
}

module.exports = Register;