import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../commons/Footer/Footer";
import Header from "../commons/Header";

export default function MainLayout() {
  return (
    <Box>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}
