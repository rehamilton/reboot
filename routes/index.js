const express = require('express')
const router = express.Router()

const userRoutes = require('./userRouter')
const todoRoutes = require('./todoRouter')

router.use("/users", userRoutes)
router.use('"/todos"', todoRoutes)

module.exports = router;