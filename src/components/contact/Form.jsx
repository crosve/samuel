import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const process = import.meta.env;

  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Please fill all the fields");
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
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <form
      ref={ref}
      className="flex content-center justify-center lg:w-2/6 bg-white rounded-lg p-4"
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          width: "100%",
          padding: "1rem",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          variant="standard"
          label="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            width: "100%",
            borderBottom: "1px solid black",
          }}
        ></TextField>
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            width: "100%",
            borderBottom: "1px solid black",
          }}
        ></TextField>

        <TextField
          id="outlined-basic"
          label="Message"
          variant="outlined"
          name="message"
          multiline
          rows={4} // Adjust the number of rows as needed
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{
            height: "100px", // Adjust the height as needed
            width: "100%",
          }}
        />

        <Button
          variant="contained"
          type="submit"
          style={{ backgroundColor: "gray", color: "white" }}
          sx={{ width: "100%" }}
        >
          Send
        </Button>
      </Box>
    </form>
  );
}

export default Form;
