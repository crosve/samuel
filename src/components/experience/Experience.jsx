import Box from "@mui/material/Box";
import { Reveal } from "../../utils/Reveal";
import Bio from "./Bio";

function Experience() {
  return (
    <section
      className="h-screen top-0 sticky "
      style={{ background: "#B9A2A2" }}
      id="exp"
    >
      <Box
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        sx={{ width: "100%", height: "100%" }}
      >
        <Reveal>
          <div className="flex justify-center items-center w-full h-full">
            <img
              className="w-full h-auto lg:h-72 lg:w-72 sm:w-48 sm:h-48 rounded-full drop-shadow-lg"
              src="man.jpeg"
            ></img>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex justify-left items-center w-full h-full">
            <Bio />
          </div>
        </Reveal>
      </Box>
    </section>
  );
}

export default Experience;
