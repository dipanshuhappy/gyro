import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ colors, config });

export default theme;
