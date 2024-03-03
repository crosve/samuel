import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { faCropSimple } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Card = ({ card }) => {
  const ref = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [symbol, setSymbol] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const checkSymbol = () => {
      if (card.url === "fa-solid fa-door-open") {
        setSymbol(faDoorOpen);
      } else if (card.url === "fa-solid fa-window-restore") {
        setSymbol(faWindowRestore);
      } else if (card.url === "fa-solid fa-crop-simple") {
        setSymbol(faCropSimple);
      } else {
        setSymbol(faHouse);
      }
    };

    checkSymbol();
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <div
      key={card.id}
      className="group relative overflow-hidden bg-neutral-200 rounded-xl text-black shadow-lg p-4 box-border pb-8
             h-[250px] w-[250px] sm:h-[300px] sm:w-[300px]
             md:h-[450px] md:w-[450px] "
    >
      <FontAwesomeIcon
        icon={symbol}
        style={{
          fontSize: "100px",
          padding: "10px",
        }}
      />
      <h1 className="text-xl font-bold mt-4">{card.title}</h1>
      {isSmallScreen ? null : (
        <p className=" mt-2 text-left text-lg font-serif">{card.description}</p>
      )}
      {/* <p className=" mt-2 text-left text-lg font-serif">{card.description}</p> */}
      {card.id === 4 ? (
        <Button
          variant="contained"
          className="bg-primary-500 text-neutral-50 font-serif"
          sx={{
            backgroundColor: "#222222",
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: "1.5rem",
            margintop: "3rem",
            fontSize: "auto",
            sm: { height: "1rem", width: "5rem" },
            md: { height: "1rem", width: "6rem" },
            fontSize: "auto",
          }}
          onClick={() => navigate("/contact")}
        >
          Contact Me
        </Button>
      ) : null}
    </div>
  );
};

export default Card;
