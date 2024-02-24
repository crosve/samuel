import { useEffect, useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(
    scrollY,
    "change",
    (latest) => {
      const prev = scrollY.getPrevious();
      if (latest > prev && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    },
    { passive: true }
  );

  return (
    <motion.nav
      className="bg-transparent sticky top-0 z-[20] mx-auto flex flex-wrap w-full items-center justify-between  p-6 "
      variants={{
        hidden: { y: -150 },
        visible: { y: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Logo />
      <Nav />
    </motion.nav>
  );
}

export default Navbar;
