import React from "react";
import Intro from "../components/home/Intro";
import Experience from "../components/experience/Experience";
import Carousel from "../components/horizonatlslide/Carousel";
import Bottom from "../components/bottom/Bottom";

function Home() {
  return (
    <>
      <div>
        <Intro />
        <Experience />

        <Carousel />
        <div
          className="h-40 w-screen absolute "
          style={{
            borderTopLeftRadius: "40px",
            borderRadius: "40px",
          }}
        >
          <Bottom />
        </div>
      </div>
    </>
  );
}

export default Home;
