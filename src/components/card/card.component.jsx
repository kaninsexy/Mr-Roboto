import React from "react";
import "./card.styles.css";
// worry about the data inside
export const Card = props => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set1&size=200x200`}
    ></img>
    <h1>{props.monster.name}</h1>
    <p>{props.monster.email}</p>
  </div>
);
