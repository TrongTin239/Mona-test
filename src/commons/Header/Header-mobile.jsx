import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";
import { Route_List } from "../../constants/RouteList";
import { Link, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
export default function HeaderMobile() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Box textAlign={"right"} pr={2} onClick={toggleDrawer("right", false)}>
          {" "}
          <CloseIcon
            fontSize="large"
            sx={{
              cursor: "pointer",
            }}
          />{" "}
        </Box>
        <Typography textAlign={"center"}>
          <Link
            href="/"
            sx={{
              color: "black",
              textDecoration: "none",
              fontSize: "30px",
            }}
          >
            {" "}
            Baycungban{" "}
          </Link>
        </Typography>
        {Route_List.map((text, index) => (
          <ListItem key={text.label} disablePadding>
            <ListItemButton>
              <Link
                href={text.path}
                sx={{ color: "black", textDecoration: "none" }}
              >
                <ListItemText primary={text.label} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box display={{ xs: "block", lg: "none" }}>
      <Menu
        onClick={toggleDrawer("right", true)}
        sx={{ cursor: "pointer", marginRight: 2 }}
        fontSize={"large"}
      />
      {["left", "right", "top", "bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} sx={{ display: "none" }}>
            {anchor}
          </Button>
          <Drawer
            anchor={"left"}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}
