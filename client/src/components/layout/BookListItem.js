import React from 'react';



function BookListItem( { _id, image, author, description, position, title, link, onSave, onDelete}) {


    return( 

        <div className= "col flex s12 m6 l4"> 
            <div className="card flex sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                    <div className="position-badge"><h5>No. {position}</h5></div>
                    <img className="activator book-image" src={image} alt= {title}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right">more_vert</i></span>
                </div>
                <div className = "card-action">
                    <a href={link} target="_blank">Buy</a>
                    {onSave && (
                        <i 
                        className="far fa-bookmark" 
                        onClick={() => {onSave({_id})}}></i>
                    )}
                    {onDelete && (<i className="fas fa-trash"
                        onClick={() => {onDelete({_id})}}></i>
                    )}
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4 flow-text"><i className="material-icons right">close</i>{title}</span>
                <p>by {author}</p>
                <p>{description}</p>
                </div>
            </div>
        </div>

    )

}

export default BookListItem

