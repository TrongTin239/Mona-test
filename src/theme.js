import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          "&.activeUrl": {
            backgroundColor: "#5e58fa",
            p: "8px 16px",
            borderRadius: "16px",
          },
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;
