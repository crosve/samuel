import { useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
          width: "300px",
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
          sx={{
            height: "100px", // Adjust the height as needed
            width: "100%", // Optional: Adjust the width as needed
          }}
        />
      </Box>
    </div>
  );
}

export default Form;
