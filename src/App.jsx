import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact.jsx";
import Reviews from "./pages/Reviews.jsx";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Box>
  );
}

export default App;
