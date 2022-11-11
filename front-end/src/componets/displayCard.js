import React from 'react'

export const DisplayCard = ({title,description,link,imageURL, imageALT}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link}>click here!</a>
            <img src={imageURL} alt={imageALT}/>
        </div>
    )
}

