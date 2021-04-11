import React from "react";
import BusItem from "./BusItem";
import "./Bus.css";

const buses = [
  [0, "Ogórek", "img/ogorek.jpg", "1987 rok", "20 osób"],
  [1, "Piętrowy", "img/anglik.jpg", "1998 rok", "63 osoby"],
];

const Bus = () => {
  return (
    <div className="bus_section">
      <h2>Dostępne autokary</h2>
      <div className="bus_section_item">
        {/* <ul> */}
        {buses.map((item, i) => (
          <BusItem
            key={item[0]}
            name={item[1]}
            photo={item[2]}
            year={item[3]}
            capacity={item[4]}
          />
          // <li key={item[0]}>{item[1]}</li>
        ))}
        {/* //   <img src="img/bus.jpg" alt="vw lt46" /> */}
        {/* </ul> */}
      </div>
    </div>
  );
};

export default Bus;
