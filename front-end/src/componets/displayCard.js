import React from "react";
import "../style/displayCard.css";
export const DisplayCard = ({
  title,
  description,
  link,
  imageURL,
  imageALT,
}) => {
  return (
    <div className="displayCard">
      <img src={imageURL} alt={imageALT} />
      <div className="displayCardBody">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link}>click here!</a>
      </div>
    </div>
  );
};
