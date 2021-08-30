const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();
const userSchema = require("../models/User");
const authorize = require("../middlewares/auth");
const { check, validationResult } = require('express-validator');

// Get wallet balance by address
router.route('/wallet/:address').get((req, res) => {
    res.status(200).json({
        token: jwtToken,
        expiresIn: 3600,
        _id: getUser._id
    });
})


module.exports = router;