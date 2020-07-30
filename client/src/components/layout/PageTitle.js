import React from 'react'


function PageTitle(props) {

    return (
        <div className="card-panel header">
 
            <h1 align = "center" className="pt-5">{props.title}</h1>
            <h4 align = "center" className="pb-5">{props.subtitle}</h4>

        </div>

    )

}

export default PageTitle