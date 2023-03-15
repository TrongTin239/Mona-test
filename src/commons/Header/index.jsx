import { Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useMatch } from "react-router-dom";
import HeaderDesktop from "./Header-desktop";
import HeaderMobile from "./Header-mobile";
import SubHeaderDesktop from "./Sub-Header-desktop";

export default function Header() {
  const checkUrl = useMatch("/");
  const isTrue = Boolean(checkUrl);

  return (
    <Box>
      {!isTrue ? <SubHeaderDesktop isTrue={isTrue} /> : <HeaderDesktop />}
      <HeaderMobile />
    </Box>
  );
}
