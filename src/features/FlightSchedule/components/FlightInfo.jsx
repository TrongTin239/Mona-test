import { Box, Typography } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Stack } from "@mui/system";
import FlightPlans from "../FlightPlans";
export default function FlightInfo() {
  return (
    <>
      <Box>
        <FlightPlans />
      </Box>
    </>
  );
}
