"use client";
import { useState } from "react";

export default function ButtonFunc() {
  const [sizeX, setSizeX] = useState(50);
  const [sizeY, setSizeY] = useState(30);

  // Double the size of button when clicked
  const handleButtonClick = () => {
    setSizeX((sizeX) => sizeX * 2);
    setSizeY((sizeY) => sizeY * 2);
  };

  //   Generate some random colors when clicked
  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777216).toString(16);
  };
  return (
    <div>
      <button
        style={{
          width: sizeX,
          height: sizeY,
          backgroundColor: getRandomColor(),
        }}
        className="btn grow-button"
        onClick={handleButtonClick}
      >
        Grow
      </button>
    </div>
  );
}
