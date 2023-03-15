import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, FormLabel, Stack, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import React, { useEffect } from "react";

export default function ScheduleInfo() {
  const [value, setValue] = React.useState(dayjs("DD-MM-YYYY"));
  const [value2, setValue2] = React.useState(dayjs("DD-MM-YYYY"));
  useEffect(() => {
    if (value2 <= value) {
      setValue(value2);
    }
    localStorage.setItem("startDay", value);
    localStorage.setItem("returnDay", value2);
  }, [value, value2]);

  return (
    <Box>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        sx={{
          flexWrap: { lg: "nowrap", xs: "wrap" },
        }}
      >
        <Box
          mb={2}
          sx={{
            position: "relative",
            width: { lg: "65%", xs: "100%" },
          }}
        >
          <Stack flexDirection={"row"}>
            <Box
              width={"45%"}
              sx={{
                border: "1px solid gray",

                height: "150px",
                position: "relative",
                display: "inline-block",
                marginRight: "-20px",
                borderRadius: "12px",
                "&::after": {
                  content: "close-quote",
                  width: "60px",
                  height: "60px",
                  backgroundColor: "gray",
                  position: "absolute",
                  borderTopLeftRadius: "60px",
                  borderBottomLeftRadius: "60px",

                  right: "-40px",
                  bottom: "56px",
                },
              }}
            >
              <Box
                sx={{
                  ml: 3,
                  py: 2,
                }}
              >
                <Typography
                  sx={{
                    color: "gray",
                  }}
                >
                  {" "}
                  FROM
                </Typography>
                <Typography
                  sx={{
                    color: "#4d46fa",
                    fontSize: { md: "36px", xs: "24px" },
                  }}
                >
                  {" "}
                  Da Nang{" "}
                </Typography>
                <Typography sx={{ fontSize: { md: "24px", xs: "18px" } }}>
                  {" "}
                  Quang Nam, Viet Nam{" "}
                </Typography>
              </Box>
            </Box>
            <Box
              width={"10%"}
              sx={{
                width: "60px",
                height: "60px",
                backgroundColor: "white",
                // border: "1px solid gray",
                marginTop: "35px",
                borderTopLeftRadius: "60px",
                borderBottomLeftRadius: "60px",
                borderTopRightRadius: "60px ",

                borderBottomRightRadius: "60px",

                zIndex: "100",
                position: "relative",
              }}
            >
              <Stack justifyContent={"center"} alignItems={"center"}>
                <ArrowBackIcon
                  sx={{
                    position: "absolute",
                    bottom: "20px",
                    right: "25px",
                  }}
                />
                <ArrowForwardIcon
                  sx={{
                    ml: 2,
                    position: "absolute",
                    bottom: "10px",
                    right: "7px",
                  }}
                />
              </Stack>
            </Box>
            <Box
              width={"45%"}
              sx={{
                border: "2px solid #4d46fa",
                marginLeft: "-20px",
                position: "relative",
                display: "inline-block",
                borderRadius: "12px",
              }}
            >
              <Box
                sx={{
                  ml: 3,
                  py: 2,
                  "&::before": {
                    content: "close-quote",
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#4d46fa",
                    position: "absolute",
                    borderTopRightRadius: "60px",
                    borderBottomRightRadius: "60px",

                    left: "-39px",
                    bottom: "55px",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "gray",
                  }}
                >
                  {" "}
                  TO
                </Typography>
                <Typography
                  component={"h2"}
                  variant={"h4"}
                  sx={{
                    color: "#4d46fa",
                    fontSize: { md: "40px", xs: "24px" },
                  }}
                >
                  {" "}
                  Ho Chi Minh{" "}
                </Typography>
                <Typography component={"h5"} variant={"h6"}>
                  {" "}
                  Viet Nam{" "}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Stack
          p={2}
          flexDirection={"row"}
          gap={2}
          sx={{
            border: "2px solid gray",
            borderRadius: "12px",
            width: { lg: "40%", md: "100%" },
            mt: { md: 2, lg: 0 },
            ".MuiInputAdornment-root": {
              height: "50px",
              width: "60px",
              overflow: "hidden",
            },
            ".MuiButtonBase-root": {
              color: "#4D46FA",
            },
          }}
        >
          <Box
            sx={{
              m: "0 auto",
            }}
          >
            <FormLabel htmlFor="Departure"> Departure</FormLabel>
            <DatePicker value={value} onChange={(newVa) => setValue(newVa)} />
          </Box>
          <Box>
            <FormLabel> Return</FormLabel>

            <DatePicker value={value2} onChange={(newVa) => setValue2(newVa)} />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
