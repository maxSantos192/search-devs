import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Nunito, sans-serif",
    body: "Inter, sans-serif",
  },
  colors: {
    layout: "#FCFCFC",
    white: "#FFFFFF",
    black: "#171923",
    slate: "#4A5568",
    blue: "#0069CA",
    purple: {
      500: "#8c19d2",
      600: "#6a13a2",
    },
  },
});

export default theme;
