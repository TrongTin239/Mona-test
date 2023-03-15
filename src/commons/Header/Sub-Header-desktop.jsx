import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { images } from "../../constants/images";
import { Route_List } from "../../constants/RouteList";

export default function SubHeaderDesktop({ isTrue }) {
  const { VietNam, US } = images;
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Box
      display={{
        xs: "none",
        lg: "block",
        backgroundColor: "#4D46FA",
        color: "white",
      }}
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
                <Link
                  href={"/"}
                  sx={{
                    color: "white",
                    "&:hover": {
                      textDecoration: "none",
                    },
                  }}
                >
                  {" "}
                  Baycungban
                </Link>
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
                  if (route.path === location.pathname) {
                    return (
                      <Typography
                        component={"li"}
                        key={route.label}
                        sx={{
                          backgroundColor: "#5e58fa",
                          p: "8px 16px",
                          borderRadius: "16px",
                        }}
                      >
                        <Link
                          href={route.path}
                          sx={{
                            color: "white",
                            textDecoration: "none",
                          }}
                        >
                          {route.name}
                        </Link>
                      </Typography>
                    );
                  } else {
                    return (
                      <Typography
                        component={"li"}
                        key={route.label}
                        sx={{
                          p: "8px 16px",
                        }}
                      >
                        <Link
                          href={route.path}
                          sx={{ color: "white", textDecoration: "none" }}
                        >
                          {route.name}
                        </Link>
                      </Typography>
                    );
                  }
                })}
              </Stack>
            </Box>
          </Box>
          <Button
            sx={{
              color: "#4d46fa",
              backgroundColor: "white",
              p: "10px 16px",
              borderRadius: "12px",
              "&:hover": {
                backgroundColor: "white",
              },
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
