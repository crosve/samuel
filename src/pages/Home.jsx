import React from "react";
import Intro from "../components/home/Intro";
import Experience from "../components/experience/Experience";
import Carousel from "../components/horizonatlslide/Carousel";
import { Reveal } from "../utils/Reveal";

function Home() {
  return (
    <>
      <Intro />
      <Experience />
      <Carousel />
    </>
  );
}

export default Home;
