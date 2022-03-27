import React, { useState } from "react";
import "./swicherLight.css";

const SwicherLight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="container">
      <div
        className="light"
        style={{ backgroundColor: `${isOpen ? "red" : "white"}` }}
      ></div>
      <button className="swicher" onClick={onClick}>{isOpen ? "Close" : "Open"}</button>
    </div>
  );
};
export default SwicherLight;
