import { useRef, useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Card from "./Cards";

const cards = [
  {
    id: 1,
    title: "Door Installation",
    url: "fa-solid fa-door-open",
    description:
      "Specializing in aluminum door installation and repair, I offer tailored solutions to elevate the look and functionality of your space. With a focus on precision and quality craftsmanship, trust me to deliver lasting results that exceed your expectations.",
  },
  {
    id: 2,
    title: "Framing Carpentry",
    url: "fa-solid fa-crop-simple",
    description:
      "As a sole proprietor specializing in framing carpentry, I bring a wealth of expertise and dedication to each project I undertake. With meticulous attention to detail and a passion for craftsmanship, I focus on delivering high-quality framing solutions tailored to your specific requirements. ",
  },
  {
    id: 3,
    title: "Window Installation",
    url: "fa-solid fa-window-restore",
    description:
      "Specializing in window installation, I provide expert service with attention to detail. Whether for homes or businesses, count on precise and efficient installation to enhance your space",
  },
  {
    id: 4,
    title: "And More!",
    url: "catlogo.jpeg",
    description:
      "I offer a range of services to meet your needs. Contact me to discuss your project and receive a free estimate.",
  },
];

function Carousel() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);
  return (
    <section
      ref={ref}
      className="h-[300vh]  top-0 sticky"
      style={{ background: "#292929", borderRadius: "40px" }}
    >
      <div className="flex flex-row sticky  top-0 h-screen items-center  overflow-hidden">
        <motion.div style={{ x }} className="flex flex-row gap-20">
          {cards.map((item) => (
            <Card card={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Carousel;
