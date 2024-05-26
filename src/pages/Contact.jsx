import { useState } from "react";
import Form from "../components/contact/Form";
import ErrorMessage from "../components/lib/ErrorMessage";

function Contact() {
  const [errorBool, setErrorBool] = useState(false);
  const [error, setError] = useState("");
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
      <ErrorMessage
        error={error}
        errorBool={errorBool}
        setErrorBool={setErrorBool}
      />

      <h1 style={{ textAlign: "center" }} className="text-2xl ">
        Contact Me
      </h1>
      <Form setError={setError} setErrorBool={setErrorBool} />
    </div>
  );
}

export default Contact;
