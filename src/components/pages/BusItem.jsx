import React from "react";
import "./BusItem.css";

const BusItem = (props) => {
  return (
    <li className="busItem" key={props.key}>
      {/* <div className="busItem"> */}
      <h3>{props.name}</h3>
      <img src={props.photo} alt={props.name} />
      <p>{`Rok produkcji: ${props.year}`}</p>
      <p>{`Liczba miejsc: ${props.capacity}`}</p>
    </li>
    // {/* </div> */}
  );
};

export default BusItem;
