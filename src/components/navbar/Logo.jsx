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
            padding: "2rem",
          }}
        >
          Samuel
        </p>
      </a>
    </RevealDown>
  );
}

export default Logo;
