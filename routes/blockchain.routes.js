const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();
const userSchema = require("../models/User");
const authorize = require("../middlewares/auth");
const { check, validationResult } = require('express-validator');


const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

import {
    customerAddress, 
    customerRecordAddress
} from '../customer.config'

import customer from '../artifacts/contracts/Customer.sol/Customer.json'
import customerRecord from '../artifacts/contracts/CustomerRecord.sol/CustomerRecord.json'


// Get wallet balance by address
router.route('/wallet/:kyc-add-customer').get((req, res) => {
    let contract = new ethers.Contract(customerAddress, customer.abi, signer)
})


module.exports = router;