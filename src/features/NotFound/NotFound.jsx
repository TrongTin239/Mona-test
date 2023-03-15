import { Box, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ textAlign: "center", height: "100vh" }}
    >
      Opps! 404 NotFound...
      <Link to={"/"}> Back to Home </Link>
    </Stack>
  );
}
