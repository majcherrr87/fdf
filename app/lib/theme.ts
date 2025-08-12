import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    customColors: {
      highlight: string;
      accent: string;
    };
  }
  interface PaletteOptions {
    customColors?: {
      highlight?: string;
      accent?: string;
    };
  }
}

const getDesignTokens = (mode: "light" | "dark") => ({
  palette: {
    mode,
    primary: {
      main: mode === "light" ? "#8bff1f" : "#559900",
      light: mode === "light" ? "#b9ff4c" : "#7fc33a",
      dark: mode === "light" ? "#5da715" : "#356600",
      contrastText: "#fff",
    },
    secondary: {
      main: mode === "light" ? "#ff4081" : "#ff79a3",
      light: mode === "light" ? "#ff79a3" : "#ffaabf",
      dark: mode === "light" ? "#b30048" : "#80002a",
      contrastText: "#fff",
    },
    background: {
      default: mode === "light" ? "#f5f5f5" : "#121212",
      paper: mode === "light" ? "#fff" : "#1e1e1e",
    },
    text: {
      primary: mode === "light" ? "#000" : "#fff",
      secondary: mode === "light" ? "#555" : "#bbb",
    },
    // Możesz tu dodać swoje własne kolory lub inne palety
    customColors: {
      highlight: mode === "light" ? "#ff5c00" : "#ff965c",
      accent: mode === "light" ? "#0055ff" : "#4f7fff",
    },
  },
  typography: {
    fontFamily: `"Geist", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
});

const mode: "light" | "dark" = "light"; // przykładowo ustalone lub dynamicznie

let theme = createTheme(getDesignTokens(mode));

theme = responsiveFontSizes(theme);

export default theme;
