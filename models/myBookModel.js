const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const myBookSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    bookId: {
        type: Schema.Types.ObjectId,
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
}, {
    toJSON: {
        virtuals: true,
    }
})

myBookSchema.virtual('book', {
    ref: "Book",
    localField: 'bookId',
    foreignField: '_id',
    justOne: true
})

const MyBook = mongoose.model("MyBook", myBookSchema)

module.exports = MyBook