import {
  Button,
  ButtonBase,
  Container,
  Divider,
  Link,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Popper from "@mui/material/Popper";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ScheduleInfo from "./components/ScheduleInfo";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const style = {
  position: "absolute",
  top: "75%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Schedule() {
  const [value, setValue] = React.useState("Multi-city");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [seatClass, setSeatClass] = useState("Business Class");

  const [open, setOpen] = React.useState(false);
  const [openClass, setOpenClass] = React.useState(false);
  const handleClose = () => setOpen(false);
  const id = open ? "simple-popper" : undefined;
  const id2 = openClass ? "transition-popper" : undefined;
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };
  const handleOpenClassSeat = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenClass((open) => !open);
  };
  useEffect(() => {
    localStorage.setItem("Adults", adults);
    localStorage.setItem("Child", children);
    localStorage.setItem("SeatClass", seatClass);
  }, [adults, children]);
  return (
    <>
      <Container
        sx={{
          backgroundColor: "#FFFFFf",
          // zIndex: "1000",
          mt: "-100px",
          overflow: "hidden",
          height: "max-content",
          borderRadius: "12px",
          p: "30px",
          position: "relative",
        }}
      >
        <Box sx={{ px: { lg: 4, sm: 0 } }}>
          <Stack
            flexDirection={"row"}
            mb={2}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Box>
              <Box className="form-radio">
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="row-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="One way / Round-trip"
                      control={<Radio />}
                      label="One way / Round-trip"
                    />
                    <FormControlLabel
                      value="Multi-city"
                      control={<Radio />}
                      label="Multi-city"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>

            <Stack flexDirection={"row"} alignItems={"center"}>
              <Typography component={"span"}>
                <Typography
                  component={"span"}
                  sx={{ color: "#4d46fa", mr: 0.5 }}
                >
                  {adults}
                </Typography>
                Adults,
                <Typography component={"span"} sx={{ color: "#4d46fa" }}>
                  {children}
                </Typography>
                children
              </Typography>

              <Button
                aria-describedby={id}
                type="button"
                onClick={handleOpen}
                sx={{ ml: "-15px" }}
              >
                <ArrowDropDownIcon />
              </Button>
              <Modal id={id} open={open}>
                <Box sx={style}>
                  <Box>
                    <Stack
                      flexDirection={"row"}
                      alignItems={"center"}
                      justifyItems={"space-between"}
                    >
                      <Typography sx={{ display: "inline", width: "80px" }}>
                        {" "}
                        Người lớn{" "}
                      </Typography>
                      <Box>
                        <Button
                          sx={{ display: "inline" }}
                          onClick={() => {
                            setAdults(adults - 1);
                            if (adults === 1) {
                              return setAdults(1);
                            }
                          }}
                        >
                          {" "}
                          -{" "}
                        </Button>
                        <Typography sx={{ display: "inline" }}>
                          {" "}
                          {adults}{" "}
                        </Typography>
                        <Button
                          sx={{ display: "inline" }}
                          onClick={() => {
                            setAdults(adults + 1);
                          }}
                        >
                          {" "}
                          +{" "}
                        </Button>
                      </Box>
                    </Stack>
                    <Divider />
                    <Stack
                      flexDirection={"row"}
                      alignItems={"center"}
                      justifyItems={"space-between"}
                    >
                      <Typography sx={{ display: "inline", width: "80px" }}>
                        {" "}
                        Trẻ em
                      </Typography>
                      <Box>
                        <Button
                          sx={{ display: "inline" }}
                          onClick={() => {
                            setChildren(children - 1);
                            if (children === 0) {
                              return setChildren(0);
                            }
                          }}
                        >
                          {" "}
                          -{" "}
                        </Button>
                        <Typography sx={{ display: "inline" }}>
                          {" "}
                          {children}{" "}
                        </Typography>
                        <Button
                          sx={{ display: "inline" }}
                          onClick={() => {
                            setChildren(children + 1);
                          }}
                        >
                          {" "}
                          +{" "}
                        </Button>
                      </Box>
                    </Stack>
                  </Box>
                  <Button
                    sx={{
                      backgroundColor: "white",
                      border: "1px solid #4d46fa ",
                      borderRadius: "20px",
                      mr: 4,
                    }}
                    onClick={handleOpen}
                  >
                    {" "}
                    Cancel{" "}
                  </Button>
                  <Button
                    sx={{
                      backgroundColor: "#4d46fa",
                      border: "1px solid #4d46fa ",
                      borderRadius: "20px",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#4d46fa",
                      },
                    }}
                    onClick={handleOpen}
                  >
                    {" "}
                    Complete{" "}
                  </Button>
                </Box>
              </Modal>
            </Stack>

            <Stack flexDirection={"row"} alignItems={"center"}>
              <Typography> {seatClass} </Typography>
              <Button
                aria-describedby={id}
                type="button"
                sx={{ ml: "-15px" }}
                onClick={handleOpenClassSeat}
              >
                <ArrowDropDownIcon />
              </Button>
              <Modal id={id2} open={openClass} onClose={handleClose}>
                <Box sx={style}>
                  <Typography
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      setSeatClass(" Business Class");
                      setOpenClass(false);
                    }}
                  >
                    {" "}
                    Business Class{" "}
                  </Typography>
                  <Divider />
                  <Typography
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      setSeatClass(" Economy Class");
                      setOpenClass(false);
                    }}
                  >
                    {" "}
                    Economy Class{" "}
                  </Typography>
                  <Divider />
                  <Typography
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      setSeatClass(" Premium Economy");
                      setOpenClass(false);
                    }}
                  >
                    {" "}
                    Premium Economy{" "}
                  </Typography>
                  <Divider />
                  <Typography
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      setSeatClass(" Frist Class");
                      setOpenClass(false);
                    }}
                  >
                    {" "}
                    Frist Class{" "}
                  </Typography>
                  <Divider />
                </Box>
              </Modal>
            </Stack>
          </Stack>
          <Box>
            <ScheduleInfo />
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          backgroundColor: "#4d46fa",
          color: "white",
          p: 2,
          mr: 2,
          width: { md: "200px", sm: "30%" },
          position: { lg: "absolute", md: "relative" },
          bottom: "-200px",
          right: "200px",
          borderRadius: "12px",
          // textAlign: "left",
          cursor: "pointer",

          "&:hover": {
            backgroundColor: "#4d46fa",
          },
        }}
      >
        <Link
          sx={{ textAlign: "right", color: "white" }}
          href="/flight-schedule"
        >
          <Stack
            flexDirection={"row"}
            sx={{
              justifyContent: { lg: "space-between", md: "center" },
            }}
            alignItems={"center"}
          >
            <Typography component={"span"}> Search Flights </Typography>
            <ArrowForwardIcon />
          </Stack>
        </Link>
      </Box>
    </>
  );
}
