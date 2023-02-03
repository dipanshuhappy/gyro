import React from "react";
import { Box, Button } from "@chakra-ui/react";
import colors from "@/pages/theme/colors";
function FullLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      w="100%"
      minHeight={"100vh"}
      bgGradient={` radial-gradient(circle, rgba(100,100,214,1) 0%, rgba(255,255,255,1) 100%);`}
    >
      {children}
    </Box>
  );
}

export default FullLayout;
