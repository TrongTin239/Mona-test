import React from "react";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
export default function Filter() {
  const [transit, settransit] = React.useState("");
  const [time, setTime] = React.useState("");
  const [airLine, setAirLine] = React.useState("");
  const [cost, setCost] = React.useState("");

  const handleChange = (event) => {
    settransit(event.target.value);
  };
  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };
  const handleChangeAirLine = (event) => {
    setAirLine(event.target.value);
  };
  const handleChangeCost = (event) => {
    setCost(event.target.value);
  };
  return (
    <Box
      width={"100%"}
      py={2}
      textAlign={"right"}
      sx={{
        display: {
          sm: "block",
          xs: "none",
        },
      }}
    >
      <Typography
        component={"span"}
        sx={{ display: "inline-block", pb: "15px" }}
      >
        {" "}
        Filter{" "}
      </Typography>

      <Box sx={{ width: "120px", display: "inline-block", mx: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Transit</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={transit}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"Direct"}>Direct</MenuItem>
            <MenuItem value={"1 transit"}> 1 transit </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: "120px", display: "inline-block", mx: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Time</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={time}
            label="Age"
            onChange={handleChangeTime}
          >
            <MenuItem value={"1:00 - 2:00"}> 1:00 - 2:00 </MenuItem>
            <MenuItem value={"2:00 - 3:00 "}> 2:00 - 3:00 </MenuItem>
            <MenuItem value={"2:00 - 3:00 "}> 3:00 - 4:00 </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: "120px", display: "inline-block", mx: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Airline</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={airLine}
            label="Age"
            onChange={handleChangeAirLine}
          >
            <MenuItem value={"Vietnam Airlines"}>Vietnam Airlines</MenuItem>
            <MenuItem value={"Bamboo Airways"}> Bamboo Airways </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: "120px", display: "inline-block", mx: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Price</InputLabel>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cost}
            label="Age"
            onChange={handleChangeCost}
          >
            <MenuItem value={"Lowest price"}>Lowest price</MenuItem>
            <MenuItem value={"Highest price"}> Highest price </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
