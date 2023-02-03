import React from "react";
import Logo from "../../public/2.png";
import FullLayout from "@/layout/fullLayout";
import { Box, Center, Flex, Stack, Text, Link } from "@chakra-ui/react";
// import { Image } from "@chakra-ui/react";
import Image from "next/image";

import { Button, ButtonGroup } from "@chakra-ui/react";
function index() {
  return (
    <FullLayout>
      <>
        <Center width={"100%"} height="100vh">
          <Flex
            justifyContent={"space-evenly"}
            height="100%"
            flexDirection="column"
          >
            <Box
              bg="white"
              shadow="dark-lg"
              minW={"400"}
              minH={"490"}
              padding={"32px"}
              borderRadius="2xl"
            >
              <Text
                textAlign="center"
                fontWeight={"bold"}
                marginBottom="8"
                fontSize="5xl"
                fontFamily="heading"
              >
                GYRO
              </Text>{" "}
              <Image
                src={Logo}
                alt="gyro logo"
                style={{ marginInline: "auto", marginBottom: "16px" }}
              />
              <Center color={"brand"}>Select One from below</Center>
              <br />
              {/* <Button colorScheme="teal" variant="solid">
                  Register as a Driver
                </Button>
                <Button colorScheme="teal" variant="solid">
                  Register as a Passenger
                </Button> */}
              <Stack spacing={2} direction="column" align="center">
                <Button
                  colorScheme="brand"
                  variant="solid"
                  size="lg"
                  marginBottom={"8"}
                >
                  Register as a Driver
                </Button>
                <Button colorScheme="brand" variant="solid" size="lg">
                  Register as a Passenger
                </Button>
              </Stack>
              <Text marginTop={"4"}>
                If you are existing user , then <Link> Sign in</Link>
              </Text>
            </Box>
          </Flex>
        </Center>
      </>
    </FullLayout>
  );
}

export default index;
