const express = require('express')
const router = express.Router()

const userRoutes = require('./userRouter')
const bookRoutes = require('./bookRouter')
const myBookRoutes = require("./mybookRouter")

router.use("/users", userRoutes)
router.use("/books", bookRoutes)
router.use("/mybooks", myBookRoutes)

module.exports = router;