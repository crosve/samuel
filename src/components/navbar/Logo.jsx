import React from "react";
import { Link } from "react-router-dom";
import { RevealDown } from "../../utils/Reveal";

function Logo() {
  return (
    <RevealDown>
      <a href="/" className="hover:text-white ">
        <p
          style={{
            fontFamily: "Bodoni, serif",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Samuel
        </p>
        {/* <img
          src={"catlogo.jpeg"}
          alt="logo"
          className="w-20 h-20 rounded-full shadow-md"
        /> */}
      </a>
    </RevealDown>
  );
}

export default Logo;
