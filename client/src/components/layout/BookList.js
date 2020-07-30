import React from 'react';
import BookListItem from './BookListItem';

function BookList({ books, onDelete }) {



    return(

        <div className = "row">
            <div className = "col m12 s12 l12" >
                <div className="card-panel">
                    <div className = "row flex">
                        {books.map((book) => (
                            <BookListItem key={book.id || book._id} {...book} onDelete={onDelete} />
                        ))}
                    </div>
                </div>
            </div>
        </div>


    )

}

export default BookList