const express = require('express');
const router = express.Router();
const MyBook = require('../models/myBookModel')
const auth = require("../middleware/auth")


router.get("/all", auth, async (req, res) => {

    const myBooks = await MyBook.find({userId: req.user})
    res.json(myBooks)

})

router.post("/", auth, async (req, res) => {

    try{

        //need to change this to reflect id from target
        const {bookId} = req.body.id

        //validation - check the user doesn't already have book saved
        // if() 
            // return res.status(400).json({msg: "Not all fields have been entered."})

        const newMyBook = new MyBook({
            bookId,
            userId: req.user
        })

        const savedMyBook = await newMyBook.save()
        res.json(savedMyBook)

    }catch(err) {
        res.status(500).json({error: err.message})
    }

})

router.delete("/:id", auth, async (req, res) => {

    const myBook = await MyBook.findOne({userId: req.user, _id: req.params.id})

    if(!myBook)
        return res.status(400).json({msg: "No todo found with this id that belongs to current user."})
    
    const deletedMyBook = await MyBook.findByIdAndDelete(req.params.id)
    res.json(deletedMyBook)
})


module.exports = router
