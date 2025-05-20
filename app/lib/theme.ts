import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "light", // light lub "dark"
    primary: {
      main: "#8bff1f",
    },
    secondary: {
      main: "#ff4081",
    },
  },
  typography: {
    fontFamily: `"Geist", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
});

// Dodanie responsywnej typografii
theme = responsiveFontSizes(theme);

export default theme;
