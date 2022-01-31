import React from "react";
import { useDrop } from "react-dnd";
import Compass from "./Compass";

function Navbar({ logourl, setSrc }) {
  const [_, dropRef] = useDrop({
    accept: "compass",
  });
  return (
    <header
      className="bg-dark p-2 mb-4 text-white"
      style={{
        textAlign: "center",
        letterSpacing: "2px",
      }}
    >
      <img
        src={logourl}
        alt="Logo"
        style={{ maxWidth: "100px" }}
        ref={dropRef}
        onDrop={() => {
          setSrc((prev) => !prev);
        }}
      />
      <span>Weather by ptakpiotr</span>
      <Compass />
    </header>
  );
}

export default Navbar;
