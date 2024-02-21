import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { RevealDown } from "../../utils/Reveal";
import { motion, useInView, useAnimation } from "framer-motion";

function NavLinks() {
  return (
    <>
      <NavLink to="/about" className="text-xl ffont-medium hover:text-white">
        About
      </NavLink>
      <NavLink to="/reviews" className="text-xl font-medium hover:text-white">
        Reviews
      </NavLink>
      <NavLink to="/contact" className="text-xl font-medium hover:text-white">
        Contact
      </NavLink>
    </>
  );
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="w-1/3 flex justify-end"
      >
        <div className="hidden md:flex justify-between w-full">
          <NavLinks />
        </div>

        <div className="md:hidden ">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </motion.nav>
      {isOpen && (
        <div className="flex flex-col basis-full items-center">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
