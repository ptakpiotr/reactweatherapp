import React from "react";
import { useDrag } from "react-dnd";

function Compass() {
  const [{ isDragging }, dragRef] = useDrag({
    type: "compass",
    item: {},
    monitor: (e) => {},
  });
  return (
    <span ref={dragRef}>
      <img
        src="https://basmilius.github.io/weather-icons/production/fill/all/compass.svg"
        alt="Search"
        style={{
          maxWidth: "50px",
        }}
      />
    </span>
  );
}

export default Compass;
