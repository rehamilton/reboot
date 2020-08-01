import React from 'react';




function SliderContent({ _id, image, author, link, title, description, position, year, read, onSave, onDelete, onRead }) {




    return (

        <div className="card-panel flex">
            <div className= "row">
                <div className="container col m3">
                    <a href={link} target="_blank">
                        {read ? (
                            <img className="slider-image isRead image-opaque" src={image} alt={title}/>
                        ) : (
                            <img className = "slider-image" src={image} alt= {title}/>
                        )}
                    </a>
                </div>
                <div className="container col s2 m1"></div>
                <div className="container col s12 m8 slider-text">
                    <div>
                        <h5>{title}</h5>
                        <p>Position: {position}</p>
                        <p>{description}</p>
                        {onSave && (
                            <i 
                            className="card-icon far fa-bookmark" 
                            onClick={() => {onSave({_id})}}></i>
                        )}
                        {onDelete && (<i className="card-icon fas fa-trash"
                            onClick={() => {onDelete({_id})}}></i>
                        )}
                        {onRead && (<i className="card-icon fas fa-book-reader"
                            onClick={() => {onRead({_id})}}></i>
                        )}
                    </div>
                </div>
            </div>
        </div>
       
    )

}

export default SliderContent