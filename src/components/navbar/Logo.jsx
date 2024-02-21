import React from "react";
import { Link } from "react-router-dom";
import { RevealDown } from "../../utils/Reveal";

function Logo() {
  return (
    <RevealDown>
      <Link to="/" className="hover:text-white ">
        <img
          src={"catlogo.jpeg"}
          alt="logo"
          className="w-20 h-20 rounded-full shadow-md"
        />
      </Link>
    </RevealDown>
  );
}

export default Logo;
