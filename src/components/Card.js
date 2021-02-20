import React from "react";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img src={props.image} alt="pokemon sprite" />
      </div>
      <h2 className="card-name">{props.name}</h2>
      <div className="card-types">{props.types}</div>
      <div className="card-info">{props.info}</div>
      <div className="card-stats">{props.stats}</div>
    </div>
  );
};

export default Card;
