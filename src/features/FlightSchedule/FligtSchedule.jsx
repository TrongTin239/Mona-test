import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ChooseFlight from "./components/ChooseFlight";
import Filter from "./components/Filter";
import FlightInfo from "./components/FlightInfo";
import YourFlight from "./components/YourFlight";

export default function FligtSchedule() {
  return (
    <Box sx={{ backgroundColor: "#f4f2f9" }}>
      <ChooseFlight />
      <Container>
        <Stack
          flexDirection={"row"}
          gap={1}
          flexWrap={""}
          sx={{
            flexWrap: { md: "nowrap", xs: "wrap" },
          }}
        >
          <Box width={"900px"}>
            <Filter />
            <FlightInfo /> <FlightInfo /> <FlightInfo /> <FlightInfo />{" "}
            <FlightInfo />{" "}
          </Box>
          <Stack
            mt={2}
            sx={{
              width: { lg: "300px", xs: "100%" },
            }}
          >
            <YourFlight />
            <Box p={2}>
              <Typography>Subtotal</Typography>
              <Typography sx={{ color: "#F06336" }}> 1,322,000 vnd</Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
