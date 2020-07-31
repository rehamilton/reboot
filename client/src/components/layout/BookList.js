import React from 'react';
import BookListItem from './BookListItem';
import UserContext from '../../context/UserContext'

function BookList({ readBooks, books, onSave, onDelete, onRead}) {

    var readBookIds = readBooks.map(b => b.bookId);


    return(

        <div className = "row">
            <div className = "col m12 s12 l12" >
                <div className="card-panel blue-grey">
                    <div className = "row flex">
                        {books.map((book) => (
                            <BookListItem key={book.id || book._id} read = {readBookIds.includes(book._id)} {...book} onSave={onSave} onDelete={onDelete} onRead={onRead} />
                        ))}
                    </div>
                </div>
            </div>
        </div>


    )

}

export default BookList