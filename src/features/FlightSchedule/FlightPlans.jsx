import { Box, Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { height, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { images } from "../../constants/images";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FlightDetail from "./components/FlightDetail";
import FareInfo from "./components/FareInfo";

export default function FlightPlans() {
  const [expanded, setExpanded] = useState(false);
  const [check, setCheck] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {}, [expanded]);

  return (
    <Box
      sx={{
        backgroundColor: "white",
        p: 2,
        borderRadius: "14px",
        mb: 2,
        ".MuiPaper-root": {
          boxShadow: "none",
        },
      }}
    >
      <Stack width={"100%"} flexDirection={"row"} gap={3} flexWrap={"wrap"}>
        <Box
          sx={{
            width: { sm: "50%" },
          }}
        >
          <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
            <Typography component={"img"} src={images.BAMBOO} atl="..." />
            <Typography
              component={"h6"}
              variant={"h6"}
              sx={{ fontSize: "14px" }}
            >
              {" "}
              Bamboo Airways{" "}
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Stack flexDirection={"row"} gap={3}>
            <Box>
              <Stack alignItems={"center"} justifyContent={"center"}>
                <Typography>21:40</Typography>
                <Typography
                  sx={{
                    p: "5px 10px",
                    backgroundColor: "#4D46FA1A",
                    borderRadius: "100px",
                  }}
                >
                  DAD
                </Typography>
              </Stack>
            </Box>
            <Box>
              {" "}
              <Stack alignItems={"center"} justifyContent={"center"}>
                <Typography>1h 30m</Typography>
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
                <Typography>Direct</Typography>
              </Stack>{" "}
            </Box>
            <Box>
              <Stack alignItems={"center"} justifyContent={"center"}>
                <Typography>23:10</Typography>
                <Typography
                  sx={{
                    p: "5px 10px",

                    backgroundColor: "#4D46FA1A",
                    borderRadius: "100px",
                  }}
                >
                  SGN
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            width: { sm: "50%" },
          }}
        >
          <Box>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              gap={1}
              sx={{
                justifyContent: { md: "center", xs: "flex-start" },
              }}
            >
              <BusinessCenterIcon />
              <Typography>
                {" "}
                Baggage{" "}
                <Typography sx={{ color: "#4D46FA" }} component={"span"}>
                  {" "}
                  20kg{" "}
                </Typography>{" "}
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  position: "relative",
                  "&:before": {
                    content: "close-quote",
                    width: "110px",
                    height: "1px",
                    backgroundColor: "gray",
                    position: "absolute",
                    bottom: "10px",
                  },
                }}
              >
                {" "}
                1,326,000 vnd{" "}
              </Typography>
            </Stack>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              sx={{
                justifyContent: { md: "center", xs: "flex-start" },
              }}
              gap={1.5}
            >
              <RestaurantIcon />
              <Typography>
                {" "}
                In-flight{" "}
                <Typography sx={{ color: "#4D46FA" }} component={"span"}>
                  {" "}
                  Meal{" "}
                </Typography>{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#F06336",
                  position: "relative",
                }}
              >
                {" "}
                1,322,000 vnd{" "}
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Box>
          {" "}
          <Button
            sx={{
              color: "#F06336",
              backgroundColor: "#F063361A",
              p: "8px 16px",
            }}
          >
            {" "}
            Choose{" "}
          </Button>{" "}
        </Box>
      </Stack>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ width: "200px" }}
        >
          <Stack flexDirection={"row"}>
            <Typography
              sx={{ mr: 2, fontSize: "12px", fontWeight: "600px" }}
              onClick={() => setCheck(false)}
            >
              FLIGHT DETAIL
            </Typography>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "600px" }}
              onClick={() => setCheck(true)}
            >
              FARE INFO
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          {!check ? <FlightDetail /> : <FareInfo />}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
