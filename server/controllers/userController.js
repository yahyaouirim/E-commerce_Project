const Users = require('../models/userModel');
const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//Create an endpoint at ip/login for login the user and giving auth-token
module.exports = {
    login: async (req, res) => {
        console.log("++++++++++++++++Login++++++++++++++");
        let success = false;
        let info = {};
        let user = await Users.findOne({ email: req.body.email });
        if (user) {
            const passCompare = req.body.password === user.password;
            if (passCompare) {
                const data = {
                    user: {
                        id: user.id
                    }
                }
                success = true;
                console.log("the user id" ,user.id);
                const token = jwt.sign(data, secret);
                info = req.body;
                res.json({ success, token , info});
            }
            else {
                return res.status(400).json({ success: success, errors: "please try with correct email/password" })
            }
        }
        else {
            return res.status(400).json({ success: success, errors: "please try with correct email/password" })
        }
    },

    //Create an endpoint at ip/auth for regestring the user in data base & sending token
    register: async (req, res) => {
        console.log("Register");
        let success = false;
        let check = await Users.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({ success: success, errors: "existing user found with this email" });
        }
        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }
        const user = new Users({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
            cartData: cart,
            isadmin:req.body.isadmin,
        });
        await user.save();
        const data = {
            user: {
                id: user.id
            }
        }

        const token = jwt.sign(data, secret);
        success = true;
        res.json({ success, token })
    },

    //Create an endpoint for saving the product in cart
    addToCart: async (req, res) => {
        console.log("Add Cart");
        let userData = await Users.findOne({ _id: req.user.id });
        userData.cartData[req.body.itemId] += 1;
        await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
        res.send("Item Added")
    },
    //Create an endpoint for retreiving the product in cart
    removeCartUser: async (req, res) => {
        console.log("Remove Cart");
        let userData = await Users.findOne({ _id: req.user.id });
        if (userData.cartData[req.body.itemId] != 0) {
            userData.cartData[req.body.itemId] -= 1;
        }
        await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
        res.send("Item Removed");
    },

    //Create an endpoint for geting all products in cart
    getCartUser: async (req, res) => {
        console.log("Get Cart");
        let userData = await Users.findOne({ _id: req.user.id });
        res.json(userData.cartData);

    }

}
