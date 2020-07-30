const express = require('express');
const router = express.Router();
const MyBook = require('../models/myBookModel')
const auth = require("../middleware/auth")


router.get("/all", auth, async (req, res) => {

    const myBooks = await MyBook.find({userId: req.user})
    res.json(myBooks)

})


module.exports = router
