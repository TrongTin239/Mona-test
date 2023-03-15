import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { format } from "date-fns";
import { Container } from "@mui/system";
import dayjs from "dayjs";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import SearchIcon from "@mui/icons-material/Search";

export default function ChooseFlight() {
  const startDay =
    dayjs(localStorage.getItem("startDay")).format("ddd, DD MMM, YYYY") || "";
  const endDay =
    dayjs(localStorage.getItem("returnDay")).format("ddd, DD MMM, YYYY") || "";
  const Adult = localStorage.getItem("Adults") || "";
  const Child = localStorage.getItem("Child") || "";
  const SeatClass = localStorage.getItem("SeatClass") || "";
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Container sx={{ p: 2 }}>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <Box
            sx={{
              width: { md: "30%", xs: "100%" },
            }}
          >
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box>
                <Typography sx={{ color: "#4D46FA" }}>
                  {" "}
                  Da Nang (DAD){" "}
                </Typography>
                <Typography> {startDay} </Typography>
              </Box>
              <Box>
                <SyncAltIcon />
              </Box>
              <Box>
                {" "}
                <Typography sx={{ color: "#4D46FA" }}>
                  {" "}
                  Ho Chi Minh (SGN)
                </Typography>
                <Typography> {endDay} </Typography>{" "}
              </Box>
            </Stack>
          </Box>
          <Box sx={{ pt: 1, width: { md: "40%", xs: "70%" } }}>
            <Stack flexDirection={"row"} alignItems={"center"}>
              <Box sx={{ pr: 2, borderRight: "2px solid gray" }}>
                <Typography component={"span"}> Round-trip </Typography>
              </Box>

              <Box sx={{ px: 2, borderRight: "2px solid gray" }}>
                {" "}
                <Typography component={"span"} sx={{ color: "#4D46FA" }}>
                  {" "}
                  {Adult}{" "}
                </Typography>{" "}
                Adults,{" "}
                <Typography component={"span"} sx={{ color: "#4D46FA" }}>
                  {" "}
                  {Child}{" "}
                </Typography>{" "}
                children{" "}
              </Box>

              <Box>
                <Typography component={"span"} sx={{ ml: 2 }}>
                  {" "}
                  {SeatClass}{" "}
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#F06336",
                p: { md: 2, xs: 1 },
                borderRadius: "12px",
                "&:hover": {
                  backgroundColor: "#F06336",
                },
              }}
            >
              <Typography mr={2} sx={{ display: { xs: "none", md: "block" } }}>
                Change Flights
              </Typography>
              <SearchIcon />
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
