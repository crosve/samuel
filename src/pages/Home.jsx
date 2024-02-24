import React from "react";
import Intro from "../components/home/Intro";
import Experience from "../components/experience/Experience";
import Carousel from "../components/horizonatlslide/Carousel";

function Home() {
  return (
    <>
      <div>
        <Intro />
        <Experience />

        <Carousel />
      </div>
    </>
  );
}

export default Home;
