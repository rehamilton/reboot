const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const myBookSchema = new Schema ({
    userId: {
        type: String,
        required: true
    },
    bookId: {
        type: String,
        required: true
    },
    read: {
        type: Boolean,
        required: true,
        default: false
    },
    myList: {
        type: Boolean,
        required: true,
        default: false
    }
})

const MyBook = mongoose.model("MyBook", myBookSchema)

module.exports = MyBook