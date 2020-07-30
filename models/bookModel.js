const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    year: {
        type: String,
        requred: true
    },
    position: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: [String],
        required: true
    },
    category: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true 
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book