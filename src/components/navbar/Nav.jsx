import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { RevealDown } from "../../utils/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";
function NavLinks() {
  return (
    <>
      <NavLink
        to="/"
        className="text-2xl font-medium hover:text-white text-neutral-200 transition-colors duration-300"
      >
        Home
      </NavLink>
      <NavLink
        to="/reviews"
        className="text-2xl font-medium hover:text-white text-neutral-200 transition-colors duration-300"
      >
        Gallery
      </NavLink>
      <NavLink
        to="/contact"
        className="text-2xl font-medium hover:text-white text-neutral-200 transition-colors duration-300"
      >
        Contact
      </NavLink>
    </>
  );
}

function OpenNavLinks({ closeMenu }) {
  return (
    <div className="h-full w-screen left-0 flex items-center justify-center flex-col gap-4">
      <NavLink
        to="/"
        className="text-4xl	 font-medium hover:text-white text-neutral-200"
        onClick={closeMenu}
      >
        Home
      </NavLink>
      <NavLink
        to="/reviews"
        className="text-4xl	font-medium hover:text-white text-neutral-200"
        onClick={closeMenu}
      >
        Gallery
      </NavLink>
      <NavLink
        to="/contact"
        className="text-4xl	 font-medium hover:text-white text-neutral-200"
        onClick={closeMenu}
      >
        Contact
      </NavLink>
    </div>
  );
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      scaleY: 0,
    },
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className={
          isOpen ? "w-1/3 flex justify-end " : "w-1/3 flex justify-end "
        }
      >
        <div className="hidden md:flex justify-between w-full p-4 mr-2">
          <NavLinks />
        </div>

        <div className="md:hidden mr-6">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col basis-full items-center backdrop-blue "
            style={{ height: "85vh" }}
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <OpenNavLinks closeMenu={closeMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
