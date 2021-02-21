import React from "react";

const Card = (props) => {
  const weight = Number(props.weight) / 10;
  const height = Number(props.height) * 10;
  return (
    <div className="card-container">
      <div className={`card-img-container type-${props.types} `}>
        <img src={props.image} alt="pokemon sprite" />
      </div>
      <h2 className="card-name">{props.name}</h2>
      <div className="card-types">
        {props.types.map((type, index) => (
          <h3 key={index} className={`type-${type.type.name} pokemon-type`}>
            {type.type.name}
          </h3>
        ))}
      </div>
      <div className="card-basic-info">
        <ul>
          <li>
            <span className="title">Height:</span> {height} cm
          </li>
          <li>
            <span className="title">Weight:</span> {weight} kg
          </li>
          <li>
            <span className="title">Abilities:</span>{" "}
            {props.abilities.map((ability, index) => (
              <p key={index} className={`card-abilities`}>
                {ability.ability.name}
              </p>
            ))}
          </li>
        </ul>
      </div>
      <div className="card-stats">{props.stats}</div>
    </div>
  );
};

export default Card;
