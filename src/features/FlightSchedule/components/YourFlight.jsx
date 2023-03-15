import { Divider, Link, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { images } from "../../../constants/images";
export default function YourFlight() {
  return (
    <Box
      sx={{
        height: "max-content",
        backgroundColor: "white",
        borderRadius: "14px",
      }}
    >
      <Typography fontSize={14} fontWeight={600} p={2}>
        YOUR FLIGHTS
      </Typography>
      <Divider />

      <Stack p={2} flexDirection={"row"} gap={2} alignItems={"center"}>
        <Typography
          sx={{
            backgroundColor: "#979797",
            borderRadius: "100%",
            p: 1,
            textAlign: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          01
        </Typography>
        <Box>
          <Typography
            fontSize={"14px"}
            sx={{
              letterSpacing: 1,

              backgroundColor: "",
              color: "text.secondary",
            }}
          >
            Fri, 11 Feb, 2022
          </Typography>
          <Typography fontWeight={600} href="#">
            {" "}
            Da Nang - Ho Chi Minh
          </Typography>
        </Box>
      </Stack>

      <Stack p={2} flexDirection={"row"} gap={2}>
        <Typography width={40} component={"img"} src={images.BAMBOO} />
        <Box>
          <Typography
            fontSize={"14px"}
            fontWeight={600}
            sx={{
              letterSpacing: 1,
            }}
          >
            BAMBOO AIRWAYS
          </Typography>
          <Link fontWeight={600} href="#">
            {" "}
            Details{" "}
          </Link>
        </Box>
      </Stack>
      <Box p={2}>
        <Stack flexDirection={"row"} gap={3}>
          <Box>
            <Stack alignItems={"center"} justifyContent={"center"}>
              <Typography>21:40</Typography>
              <Typography
                sx={{
                  p: "5px 10px",
                  backgroundColor: "#4D46FA1A",
                  borderRadius: "100px",
                }}
              >
                DAD
              </Typography>
            </Stack>
          </Box>
          <Box>
            {" "}
            <Stack alignItems={"center"} justifyContent={"center"}>
              <Typography>1h 30m</Typography>
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Typography
                  sx={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    border: "1px solid #4D46FA",
                    backgroundColor: "white",
                  }}
                >
                  {" "}
                </Typography>
                <Typography
                  sx={{
                    width: "80px",
                    height: "2px",
                    backgroundColor: "#4D46FA",
                    position: "relative",
                  }}
                ></Typography>
                <Typography
                  sx={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    border: "1px solid #4D46FA",
                    backgroundColor: "#4D46FA",
                  }}
                >
                  {" "}
                </Typography>
              </Stack>
              <Typography>Direct</Typography>
            </Stack>{" "}
          </Box>
          <Box>
            <Stack alignItems={"center"} justifyContent={"center"}>
              <Typography>23:10</Typography>
              <Typography
                sx={{
                  p: "5px 10px",

                  backgroundColor: "#4D46FA1A",
                  borderRadius: "100px",
                }}
              >
                SGN
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Box p={2}>
        <Typography
          p={2}
          sx={{
            backgroundColor: "#4D46FA1A",
            color: "#4D46FA",
            borderRadius: "12px",
            textAlign: "center",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          {" "}
          Change departure flight{" "}
        </Typography>
      </Box>
      <Box p={2}>
        {" "}
        <Divider />
      </Box>
      <Stack p={2} flexDirection={"row"} gap={2} alignItems={"center"}>
        <Typography
          sx={{
            backgroundColor: "#4D46FA",
            borderRadius: "100%",
            p: 1,
            textAlign: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          02
        </Typography>
        <Box>
          <Typography
            fontSize={"14px"}
            sx={{
              letterSpacing: 1,

              backgroundColor: "",
              color: "text.secondary",
            }}
          >
            Sun, 13 Feb, 2022
          </Typography>
          <Typography fontWeight={600} href="#">
            {" "}
            Ho Chi Minh - Da Nang
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
