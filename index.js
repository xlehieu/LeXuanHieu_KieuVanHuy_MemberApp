const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const jwt = require('jsonwebtoken');
mongoose.connect('mongodb+srv://xlehieu:Hieumao2003@cluster0.tnl6qbx.mongodb.net/member', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log("Error: ", err);
})

app.listen(port, () => {
    console.log("Server is running on port 8000");

})

const User = require('./models/user');
// đăng ký tài khoản

app.post("/register", async (req, res) => {
    try {
        const { name, phone, password } = req.body;
        //check nếu sdt đã được đăng ký
        const existingUser = await User.findOne({ phone })
        if (existingUser) {
            return res.status(400).json({ message: 'Số điện thoại này đã được đăng ký' });
        }
        //thêm một user mới
        const newUser = new User({ name, phone, password });
        //lưu user vào database
        await newUser.save();
        return res.status(200).json({ message: 'Đăng ký thành công' });
    } catch (err) {
        res.status(500).json({ message: "Registration failed" });
        console.log(err);
    }
});


app.post("/login", async (req, res) => {
    try {
        const { phone, password } = req.body;
        console.log(phone)
        //check if the user exists
        const user = await User.findOne({ phone });
        if (!user) {
            return res.status(400).json({ message: "Số điện thoại hoặc mật khẩu không đúng" });
        }
        if (user.password != password) {
            return res.status(401).json({ message: "Sai mật khẩu" });
        }
        return res.status(200).json({ user});
    } catch (err) {
        res.status(500).json({ message: "Login failed" })
    }
})