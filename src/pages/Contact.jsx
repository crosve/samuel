import React from "react";
import Form from "../components/contact/Form";

function Contact() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h1 style={{ textAlign: "center" }} className="text-2xl ">
        Contact Me
      </h1>
      <Form />
    </div>
  );
}

export default Contact;
