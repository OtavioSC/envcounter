import { extendTheme } from "@chakra-ui/react";

const overrides = {
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
};

export const theme = extendTheme(overrides);
