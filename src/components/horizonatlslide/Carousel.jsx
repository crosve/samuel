import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Card from "./Cards";

const cards = [
  {
    id: 1,
    title: "cat",
    url: "catlogo.jpeg",
    description: "Door Installation",
  },
  {
    id: 2,
    title: "cat",
    url: "catlogo.jpeg",
    description: "Framing Carpentry",
  },
  {
    id: 3,
    title: "cat",
    url: "catlogo.jpeg",
    description: "Window Installation",
  },
  {
    id: 4,
    title: "cat",
    url: "catlogo.jpeg",
    description: "And More!",
  },
];

function Carousel() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);
  return (
    <section ref={ref} className="h-[300vh] relative bg-neutral-500">
      <div className="flex sticky top-0 h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20">
          {cards.map((item) => (
            <Card card={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Carousel;
