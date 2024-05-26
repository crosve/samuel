import Box from "@mui/material/Box";
import { Reveal } from "../../utils/Reveal";
import Bio from "./Bio";

function Experience() {
  return (
    <section className="h-screen top-0 sticky bg-neutral-700" id="exp">
      <Box
        className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 "
        sx={{ width: "100%", minHeight: "100%" }}
      >
        <Reveal>
          <div className="flex justify-center items-center w-full h-full">
            {/* <img
            className="w-full h-auto lg:h-72 lg:w-72 sm:w-48 sm:h-48 rounded-full drop-shadow-lg"
            src="man.jpeg"
          ></img> */}
          </div>
        </Reveal>

        <Reveal>
          <div className="flex justify-center items-center w-11/12 h-full">
            <Bio />
          </div>
        </Reveal>
      </Box>
    </section>
  );
}

export default Experience;
