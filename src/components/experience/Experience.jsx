import Box from "@mui/material/Box";
import { Reveal } from "../../utils/Reveal";

function Experience() {
  return (
    <section className="h-screen" id="exp">
      <Box
        className="flex flex-col items-center justify-center"
        sx={{ width: "100%", height: "100%" }}
      >
        <Reveal>
          <h1 className="text-2xl">Experience</h1>
        </Reveal>

        <Reveal>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            condimentum, sem nec congue fringilla, nunc ex malesuada libero, at
            lacinia nisl elit nec erat. Sed et nunc nec ex malesuada libero, at
            lacinia nisl elit nec erat. Sed
          </p>
        </Reveal>
      </Box>
    </section>
  );
}

export default Experience;
