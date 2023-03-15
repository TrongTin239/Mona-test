import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { images } from "../../../constants/images";
export default function FlightDetail() {
  return (
    <Box>
      <Stack flexDirection={"row"} gap={3} flexWrap={"wrap"}>
        <Box>
          <Stack flexDirection={"row"} gap={3}>
            <Box>
              <Stack alignItems={"space-between"} gap={5}>
                <Box>
                  <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                    21:40
                  </Typography>{" "}
                  <Typography fontSize={"12px"}>11 Feb</Typography>{" "}
                </Box>
                <Box fontSize={"14px"}>1h 30m</Box>
                <Box>
                  <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                    21:40
                  </Typography>{" "}
                  <Typography fontSize={"12px"}>11 Feb</Typography>{" "}
                </Box>
              </Stack>
            </Box>
            <Stack justifyContent={"flex-start"} alignItems={"center"}>
              <Typography
                sx={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  border: "1px solid #4D46FA",
                  backgroundColor: "white",
                }}
              ></Typography>
              <Typography
                sx={{
                  width: "2px",
                  height: "80%",
                  backgroundColor: "#4D46FA",
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
              ></Typography>
            </Stack>
            <Stack justifyContent={"space-between"}>
              <Box>
                <Typography fontSize={"14px"} fontWeight={600}>
                  Da nang (DAD)
                </Typography>
                <Typography fontSize={"12px"}>Da Nang Airport</Typography>
              </Box>
              <Box>
                <Typography fontSize={"14px"} fontWeight={600}>
                  Ho Chi Minh City (SGN)
                </Typography>
                <Typography fontSize={"12px"}>Tansonnhat Intl</Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
        <Box flexGrow={1}>
          <Box>
            <Stack flexDirection={"row"} gap={1} mb={2} alignItems={"center"}>
              <Box width={"30px"}>
                <Typography
                  component={"img"}
                  height={"30px"}
                  src={images.BAMBOO}
                />
              </Box>
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
                <Stack flexDirection={"row"} alignItems={"center"}>
                  <Typography component={"span"}>QH-183</Typography>
                  <Typography
                    component={"span"}
                    sx={{
                      mx: 1,
                      width: "4px",
                      height: "4px",
                      backgroundColor: "gray",
                      display: "inline-block",
                      borderRadius: "50%",
                    }}
                  ></Typography>
                  <Typography component={"span"}>Economy</Typography>
                </Stack>
              </Box>
            </Stack>
            <Box
              sx={{ backgroundColor: "#f4f2f9", borderRadius: "14px", p: 2 }}
            >
              <Stack flexDirection={"row"}>
                <Box width={"50%"}>
                  <Typography>
                    {" "}
                    Baggage{" "}
                    <Typography component={"span"} sx={{ color: "#4D46FA" }}>
                      {" "}
                      20kg{" "}
                    </Typography>{" "}
                  </Typography>
                </Box>
                <Box>
                  <Typography>
                    {" "}
                    Aircraft
                    <Typography component={"span"} sx={{ color: "#4D46FA" }}>
                      {" "}
                      Airbus A321
                    </Typography>{" "}
                  </Typography>
                </Box>
              </Stack>
              <Stack flexDirection={"row"}>
                <Box width={"50%"}>
                  <Typography>
                    {" "}
                    In-flight
                    <Typography component={"span"} sx={{ color: "#4D46FA" }}>
                      {" "}
                      Meal
                    </Typography>{" "}
                  </Typography>
                </Box>
                <Box>
                  <Typography>
                    {" "}
                    Seat layout
                    <Typography component={"span"} sx={{ color: "#4D46FA" }}>
                      {" "}
                      3-3
                    </Typography>{" "}
                  </Typography>
                </Box>
              </Stack>
              <Stack flexDirection={"row"}>
                <Box width={"50%"}>
                  <Typography>
                    {" "}
                    In-flight
                    <Typography component={"span"} sx={{ color: "#4D46FA" }}>
                      {" "}
                      Entertainment
                    </Typography>{" "}
                  </Typography>
                </Box>
                <Box>
                  <Typography>
                    {" "}
                    Seat pitch
                    <Typography component={"span"} sx={{ color: "#4D46FA" }}>
                      {" "}
                      29 inches (standard)
                    </Typography>{" "}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
