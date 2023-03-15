import { Box, Container, Stack } from "@mui/system";
import React from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Divider, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function Footer() {
  return (
    <Box
      mt={3}
      sx={{
        position: "relative",
        zIndex: "0",
        bgcolor: "white",
        height: { lg: "100px", md: "max-content" },
      }}
    >
      <Box
        sx={{
          "&::after": {
            position: "absolute",
            height: 100,
            width: "100%",
            backgroundColor: "#F4F2F9",
            left: "250px",
            content: "close-quote",
            top: 0,
          },
        }}
      >
        {" "}
      </Box>
      <Container sx={{ paddingLeft: 4, position: "relative", pt: 3 }}>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            gap={3.7}
            sx={{ width: { lg: "80%", md: "100%" } }}
            flexWrap={"wrap"}
          >
            <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
              <Typography sx={{ display: "inline" }}>
                <LocalPhoneOutlinedIcon
                  fontSize="small"
                  sx={{
                    color: "white",
                    backgroundColor: "#4d46fa",

                    p: "5px",
                    borderRadius: "100%",
                  }}
                />
              </Typography>
              <Typography sx={{ display: "inline" }}>
                Call us: +84 908 02 02 58
              </Typography>
            </Stack>
            <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
              <Typography sx={{ display: "inline" }}>
                <EmailIcon
                  fontSize="small"
                  sx={{
                    color: "white",
                    backgroundColor: "#4d46fa",

                    p: "5px",
                    borderRadius: "100%",
                  }}
                />
              </Typography>
              <Typography sx={{ display: "inline" }}>
                Email: chucinog@gmail.com
              </Typography>
            </Stack>
          </Stack>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            gap={2}
            sx={{ width: { lg: "20%", md: "100%" } }}
          >
            <Typography
              sx={{
                position: "relative",
                display: "inline",
                "&::after": {
                  content: "close-quote",
                  width: "40px",
                  backgroundColor: "red",
                  position: "absolute",
                },
              }}
            >
              Follow us
            </Typography>
            <Box
              sx={{
                display: "inline-block",
                width: "40px",
                height: "2px",
                backgroundColor: "black",
              }}
            ></Box>
            <Typography sx={{ display: "inline" }}>
              <FacebookIcon
                fontSize="small"
                sx={{
                  color: "white",
                  backgroundColor: "#4d46fa",

                  p: "5px",
                  borderRadius: "100%",
                }}
              />
            </Typography>
            <Typography sx={{ display: "inline" }}>
              <InstagramIcon
                fontSize="small"
                sx={{
                  color: "white",
                  backgroundColor: "#4d46fa",

                  p: "5px",
                  borderRadius: "100%",
                }}
              />
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
