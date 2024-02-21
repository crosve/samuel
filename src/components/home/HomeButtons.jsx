import React from "react";
import Button from "@mui/material/Button";
import { Reveal } from "../../utils/Reveal";

function HomeButtons() {
  return (
    <Reveal>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: "#222222",
            color: "#FFFFFF",
            padding: "1rem",
            margin: "1rem",
            borderRadius: "10px",
            fontFamily: "Inter",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            minWidth: "120px",
            width: "10px",
            height: "40px",
          }}
        >
          Experience
        </Button>
        <Button
          variant="contained"
          size="large"
          style={{
            backgroundColor: "#EBEBEB",
            color: "#333333",
            padding: "1rem ",
            margin: "1rem",
            borderRadius: "10px",
            fontFamily: "Inter",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            minWidth: "120px",
            height: "40px",
          }}
        >
          Contact
        </Button>
      </div>
    </Reveal>
  );
}

export default HomeButtons;