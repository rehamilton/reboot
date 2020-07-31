const express = require('express');
const router = express.Router();
const MyBook = require('../models/myBookModel')
const auth = require("../middleware/auth")
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');


router.get("/all", auth, async (req, res) => {

    const myBooks = await MyBook.find({userId: req.user}).populate("book")
    res.json(myBooks)

})

router.delete("/:id/delete", auth, async (req, res) => {

    try {

        const userId = mongoose.Types.ObjectId(req.user)
        const bookId = mongoose.Types.ObjectId(req.params.id)

        const deletedBook = await MyBook.findOneAndDelete({bookId: bookId, userId: userId })

        res.json(deletedBook);

    }catch(err) {
        res.status(500).json({error: err.message})
    }
})

router.put('/:id/read', async (req, res) => {

    try{

        const token = req.body.token
        const verified = jwt.verify(token, process.env.JWT_SECRET)

        if (!verified) return res.json(false)

        console.log({verified});
        console.log(verified.id);
        console.log("this:" + req.params.id);
        const userId = mongoose.Types.ObjectId(verified.id)
        const bookId = mongoose.Types.ObjectId(req.params.id)

        const filter = {bookId: bookId, userId: userId}
        const update = {read: true}

        const existingBook = await MyBook.findOne(filter)

        if(existingBook) {

            const readBook = await MyBook.updateOne(filter, update, {
                new: true
            })
    
            res.json(readBook);

        }

        if(!existingBook) {

            const newBook = new MyBook({
                userId: userId,
                bookId: bookId,
                read: true
            })

            const saved = await newBook.save();

            res.json(saved);

        }


        res.json(readBook);

    }catch(err) {
        res.status(500).json({error: err.message})
    }

})


router.post('/:id/save', async (req, res) => {
    try {

        const token = req.body.token
        const verified = jwt.verify(token, process.env.JWT_SECRET)

        if (!verified) return res.json(false)

        console.log({verified});
        console.log(verified.id);
        console.log("this:" + req.params.id);
        const userId = mongoose.Types.ObjectId(verified.id)
        const bookId = mongoose.Types.ObjectId(req.params.id)

    
        const myBook = await MyBook.findOne({
            userId: userId, 
            bookId: bookId
        }).catch((err) => {
            console.log(err);
        })

        console.log({myBook});
        if(myBook)
            return res.status(400).json({msg: "You have already saved the book"})
        
        const newBook = new MyBook({
            userId: userId,
            bookId: bookId
        })

        const saved = await newBook.save();

        res.json(saved);

    }catch(err) {
        res.status(500).json({error: err.message})
    }
})


module.exports = router
 