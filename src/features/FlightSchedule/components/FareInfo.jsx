import React from "react";
import { Stack } from "@mui/system";
import { Box, Divider, Typography } from "@mui/material";
import { images } from "../../../constants/images";
export default function FareInfo() {
  return (
    <Box>
      <Stack flexDirection={"row"} flexWrap={"wrap"}>
        <Box
          sx={{
            width: { sm: "40%", xs: "100%" },
          }}
        >
          <Typography fontSize={16} fontWeight={600} mb={3}>
            {" "}
            CONDITIONS
          </Typography>

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
          <Stack flexDirection={"row"} alignItems={"center"}>
            <Box>
              <Typography>
                Da Nang
                <Typography
                  sx={{
                    color: "#4D46FA",
                  }}
                >
                  Economy
                </Typography>
              </Typography>
            </Box>
            <Box>
              {" "}
              <Stack>
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
              </Stack>{" "}
            </Box>
            <Box>
              <Stack alignItems={"center"} justifyContent={"center"}>
                <Typography>Ho Chi Minh City</Typography>
              </Stack>
            </Box>
          </Stack>
          <Typography mt={3} fontSize={12}>
            Non - Refundable
          </Typography>
        </Box>
        <Box flexGrow={0.8}>
          <Typography fontSize={16} fontWeight={600} mb={3}>
            {" "}
            PRICE DETAILS
          </Typography>
          <Stack flexDirection={"row"} mb={1} justifyContent={"space-between"}>
            <Typography>Adult Basic Fare (x1)</Typography>
            <Typography> 1,326,000 vnd</Typography>
          </Stack>
          <Stack flexDirection={"row"} mb={1} justifyContent={"space-between"}>
            <Typography>Tax</Typography>
            <Typography> included</Typography>
          </Stack>
          <Stack flexDirection={"row"} mb={1} justifyContent={"space-between"}>
            <Typography>Regular Total Price (x1)</Typography>
            <Typography> 1,326,000 vnd</Typography>
          </Stack>
          <Stack flexDirection={"row"} mb={1} justifyContent={"space-between"}>
            <Typography sx={{ color: "#F06336" }}>Save</Typography>
            <Typography> -4,000</Typography>
          </Stack>
          <Divider />
          <Stack flexDirection={"row"} mt={1} justifyContent={"space-between"}>
            <Typography>You Pay</Typography>
            <Typography sx={{ color: "#F06336" }}>1,322,000 vnd</Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
