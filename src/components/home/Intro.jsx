import React from "react";
import Box from "@mui/system/Box";
import HomeButtons from "./HomeButtons";
import { Reveal } from "../../utils/Reveal";

function Intro() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: 0,
        width: "100%",
        height: "100vh",
        borderRadius: "40px",
        backgroundImage: "url('aluminum.jpeg')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          p: { lg: "4", xs: "2" },
          m: { lg: "2", sx: "1" },
          mb: { lg: "4", xs: "2" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        <Reveal>
          <h1 className="font-bold text-neutral-100 mb-4 text-center text-4xl md:text-5xl lg:text-7xl">
            Perfection from the <b>Glass</b>
          </h1>

          <p className="text-lg text-center text-base md:text-lg lg:text-xl">
            I create and install custom products for you
          </p>
        </Reveal>
        <HomeButtons />
      </Box>
    </div>
  );
}

export default Intro;
