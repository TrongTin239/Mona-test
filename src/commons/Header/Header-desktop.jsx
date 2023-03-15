import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { images } from "../../constants/images";
import { Route_List } from "../../constants/RouteList";
export default function HeaderDesktop() {
  const { VietNam, US } = images;
  return (
    <Box
      display={{ xs: "none", lg: "block" }}
      sx={{ position: "absolute", p: 4, width: "100%" }}
    >
      <Container>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Stack
              flexDirection={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              gap={1}
            >
              <Typography
                component="h2"
                variant={"h5"}
                sx={{ cursor: "pointer" }}
              >
                Baycungban
              </Typography>
              <Typography
                component="img"
                src={VietNam}
                alt="VietNam"
                width={"20px"}
                height={"20px"}
                sx={{
                  cursor: "pointer",
                  border: "3px solid #4d46fa ",
                  borderRadius: "100%",
                }}
              />
              <Typography
                component="img"
                src={US}
                alt="US"
                width={"20px"}
                height={"20px"}
                sx={{ cursor: "pointer" }}
              />
            </Stack>
          </Box>
          <Box>
            <Box component={"ul"}>
              <Stack flexDirection={"row"} gap={"30px"}>
                {Route_List.map((route) => {
                  return (
                    <Typography component={"li"} key={route.label}>
                      <Link
                        href={route.path}
                        sx={{ color: "black", textDecoration: "none" }}
                      >
                        {route.name}
                      </Link>
                    </Typography>
                  );
                })}
              </Stack>
            </Box>
          </Box>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#4d46fa",
              p: "10px 16px",
              borderRadius: "12px",
            }}
          >
            {" "}
            Booking now{" "}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
