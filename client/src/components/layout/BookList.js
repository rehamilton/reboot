import React from 'react';
import BookListItem from './BookListItem';
import UserContext from '../../context/UserContext'

function BookList({ books, onSave, onDelete }) {


    console.log({books});


    return(

        <div className = "row">
            <div className = "col m12 s12 l12" >
                <div className="card-panel blue-grey">
                    <div className = "row flex">
                        {books.map((book) => (
                            <BookListItem key={book.id || book._id} {...book} onSave={onSave} onDelete={onDelete}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    )

}

export default BookList