import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";
import ErrorMessage from "../lib/ErrorMessage";

function Form({ setError, setErrorBool }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const process = import.meta.env;

  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      setError("Please fill all the fields");
      setErrorBool(true);
      console.log("Please fill all the fields");
      return;
    }

    emailjs
      .sendForm(
        process.VITE_SERVICE_ID,
        process.VITE_TEMPLATE_ID,
        ref.current,
        {
          publicKey: process.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(error.text);
          setErrorBool(true);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <form
      className="flex content-center justify-center lg:w-2/6 rounded-lg p-4 shadow-lg text-black"
      onSubmit={handleSubmit}
      ref={ref}
      style={{
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          width: "100%",
          padding: "1rem",
        }}
        noValidate
        autoComplete="off"
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "0.8rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "0.8rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
          }}
        />

        <textarea
          placeholder="Message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            height: "100px", // Adjust the height as needed
            width: "100%",
            padding: "0.8rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            resize: "vertical", // Allow vertical resizing
          }}
        />

        <Button
          variant="contained"
          type="submit"
          style={{
            backgroundColor: "gray",
            color: "white",
            width: "100%",
            borderRadius: "0.5rem",
            padding: "0.8rem",
          }}
        >
          Send
        </Button>
      </Box>
    </form>
  );
}

export default Form;
