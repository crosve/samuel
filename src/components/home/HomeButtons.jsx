import React from "react";
import Button from "@mui/material/Button";
import { Reveal } from "../../utils/Reveal";
import { useNavigate } from "react-router-dom";
import Nav from "../navbar/Nav";

function HomeButtons() {
  const navigate = useNavigate();
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
          <a href="#exp" style={{ textDecoration: "none", color: "white" }}>
            Services
          </a>
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
          onClick={() => navigate("/contact")}
        >
          Contact
        </Button>
      </div>
    </Reveal>
  );
}

export default HomeButtons;
