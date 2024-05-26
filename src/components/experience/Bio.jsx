import React from "react";
import Box from "@mui/system/Box";

function Bio() {
  return (
    <Box sx={{ padding: "2rem" }}>
      <h1 className="font-bold lg:text-4xl text-4xl lg:pb-4 pb-2 font-serif">
        Who am I?
      </h1>
      <p className="lg:text-lg sm:text-md pb-4 sm:pb-2 font-serif">
        My name is Samuel Lucero and I speacalize in aluminum welding and
        installation. I have been in the business for over 30 years and have
        worked on many projects. I started working in the industry from my
        teenage years in Ecuador and continued to work in the industry when I
        moved to the United States I have worked on projects such as the
        installation of aluminum windows, doors, and railings. I have also
        worked on projects that required custom aluminum welding.
      </p>
      <p className="lg:text-xl sm:text-lg pb-4 sm:pb-2 font-serif">
        I am a dedicated professional who is passionate about delivering
        high-quality results that meet and exceed my clients' expectations. I
        take pride in my work and strive to provide exceptional service on every
        project I undertake. I am committed to delivering lasting results that
        enhance the look and functionality of your space.{" "}
      </p>
    </Box>
  );
}

export default Bio;
