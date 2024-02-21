import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (name === "" || email === "" || message === "") {
      alert("Please fill all the fields");
      return;
    }
    console.log(name, email, message);
  };
  return (
    <div className="flex content-center justify-center w-96	 ">
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          width: { lg: "500px", sm: "fit-content" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            width: "100%",
          }}
        ></TextField>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            width: "100%",
          }}
        ></TextField>
        <TextField
          id="outlined-basic"
          label="Message"
          variant="outlined"
          multiline
          rows={4} // Adjust the number of rows as needed
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{
            height: "100px", // Adjust the height as needed
            width: "100%", // Optional: Adjust the width as needed
          }}
        />

        <Button
          variant="contained"
          style={{ backgroundColor: "black", color: "white" }}
          sx={{ width: "100%" }}
          onClick={handleSubmit}
        >
          Send
        </Button>
      </Box>
    </div>
  );
}

export default Form;
