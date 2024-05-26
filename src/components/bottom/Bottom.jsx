import { useState } from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";

function Bottom() {
  const [hover, setHover] = useState(
    "hover:text-stone-600 transition-colors duration-300 cursor-pointer"
  );
  return (
    <Box sx={{ borderRadius: "40px", height: "full" }}>
      <div className="flex flex-col items-center justify-center text-white p-7">
        <div className="border-b-2 border-stone-500 my-2 text-center w-full">
          <div className="flex flex-col md:flex-row justify-around mt-4 mb-10 w-full">
            <div className="text-center mb-4 md:mb-0">
              <h2 className="text-xl font-bold">About Me</h2>
              <ul>
                <li className="text-sm mb-2 mt-2 text-stone-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  About Us
                </li>
                <li className="text-sm mb-2 mt-2 text-stone-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  Our Team
                </li>
              </ul>
            </div>
            <div className="text-center mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Contact</h2>
              <ul>
                <li className="text-sm text-stone-400 mb-2 mt-2 hover:text-white transition-colors duration-300 cursor-pointer">
                  <a
                    href="/contact"
                    className="no-underline text-stone-400 hover:text-white"
                  >
                    Email Me
                  </a>
                </li>
                <li className="text-sm mb-2 text-stone-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  Call Me
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">Follow Me</h2>
              <ul>
                <li className="text-sm text-stone-400 mb-2 mt-2 hover:text-white transition-colors duration-300 cursor-pointer">
                  Facebook
                </li>
                <li className="text-sm text-stone-400 mb-2 hover:text-white transition-colors duration-300 cursor-pointer">
                  Instagram
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-4 font-serif">@2024 Samuel. All rights reserved.</p>
      </div>
    </Box>
  );
}

export default Bottom;
