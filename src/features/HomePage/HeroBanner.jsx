import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { images } from "../../constants/images";
export default function HeroBanner() {
  const bgUrl = images.HeroBaner;
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Container>
        <Box sx={{ mt: "200px", paddingLeft: 3, overflow: "hidden" }}>
          <Typography sx={{ fontSize: { md: "72px", xs: "40px" } }}>
            Hello!
          </Typography>
          <Typography sx={{ fontSize: { md: "72px", xs: "40px" } }}>
            Where are
          </Typography>
          <Typography sx={{ fontSize: { md: "72px", xs: "40px" } }}>
            {" "}
            you{" "}
            <Typography
              component={"span"}
              color={"#4d46fa"}
              sx={{ fontSize: { md: "72px", xs: "40px" } }}
            >
              flying
            </Typography>{" "}
            to ...{" "}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
