import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";
// worry about the structure
export const CardList = props => (
  //   return <div className="card-list">{props.children}</div>;
  <div className="card-list">
    {props.monsters.map(monsters1 => (
      <Card key={monsters1.id} monster={monsters1}></Card>
    ))}
  </div>
);
