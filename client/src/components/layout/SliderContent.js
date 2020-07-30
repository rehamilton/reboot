import React from 'react';




function SliderContent({ image, author, link, title, description, position, year }) {




    return (

        <div className="card-panel flex">
            <div className= "row">
                <div className="container col m3">
                    <a href={link} target="_blank">
                        <img className = "slider-image" src={image} alt= {title}/>
                    </a>
                </div>
                <div className="container col s2 m1"></div>
                <div className="container col s12 m8 slider-text">
                    <div>
                        <h5>{title}</h5>
                        <p>Position: {position}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
       
    )

}

export default SliderContent