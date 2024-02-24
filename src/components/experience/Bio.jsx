import React from "react";
import Box from "@mui/system/Box";

function Bio() {
  return (
    <Box sx={{ padding: "2rem" }}>
      <h1 className="font-bold lg:text-6xl text-4xl lg:pb-4 pb-2">Who am I?</h1>
      <p className="lg:text-xl sm:text-lg pb-4 sm:pb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores
        temporibus voluptatum quae unde! Vero sit provident ratione quod
        molestiae! Suscipit nulla, voluptatibus alias nisi soluta laborum
        excepturi nemo ipsum.
      </p>
      <p className="lg:text-xl sm:text-lg pb-4 sm:pb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quis.
        Soluta explicabo quos voluptatibus porro tempora ipsam, labore at,
        corrupti deserunt facere ab doloremque aperiam maxime quaerat. Sed, unde
        consectetur!
      </p>
    </Box>
  );
}

export default Bio;
