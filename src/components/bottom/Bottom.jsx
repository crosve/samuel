import React from "react";
import Box from "@mui/material/Box";

function Bottom() {
  return (
    <Box sx={{ border: "1px dashed grey", borderRadius: "40px" }}>
      <div className="flex flex-col items-center justify-center h-40 text-white">
        <h1 className="text-2xl font-bold">Get in touch today</h1>
        {/* <p className="text-sm">1234 Main Street, Anytown, USA</p>
        <p className="text-sm">123-456-7890</p> */}
        <p className="text-sm"></p>
      </div>
    </Box>
  );
}

export default Bottom;
