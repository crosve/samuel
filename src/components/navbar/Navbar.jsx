import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

function Navbar() {
  return (
    <div className="bg-transparent sticky top-0 z-[20] mx-auto flex flex-wrap w-full items-center justify-between  p-6">
      <Logo />
      <Nav />
    </div>
  );
}

export default Navbar;
