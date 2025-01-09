import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Nunito, sans-serif",
    body: "Inter, sans-serif",
  },
  colors: {
    white: "#FFFFFF",
    black: "#171923",
    zinc: "#4A5568",
    blue: "#0069CA",
    purple: "#8C19D2",
  },
});

export default theme;
