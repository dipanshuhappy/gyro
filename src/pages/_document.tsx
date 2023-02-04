import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import theme from "./theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBcf-4VVw3jUW0rBTGH8d4IWMhzxppEhKk&libraries=places" />
      </Head>
      <body>
        {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
