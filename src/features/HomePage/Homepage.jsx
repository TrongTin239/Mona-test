import { Box } from "@mui/material";
import React from "react";
import HeroBanner from "./HeroBanner";
import Schedule from "./Schedule";

export default function Homepage() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <HeroBanner />
      <Schedule />
    </Box>
  );
}
