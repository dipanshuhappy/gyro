import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    Image,
    useColorModeValue,
    Link,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import React from 'react';
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  import FullLayout from "@/layout/fullLayout";
  import { Icon } from '@chakra-ui/react';
//   import { CheckIcon } from '@chakra-ui/react'
  
  
  function driverRide() {
    const [showPassword, setShowPassword] = useState(false);
  
  
    return (
      <FullLayout>
      <Flex minH={"100vh"} align={"left"}  justify={"left"}>
        <Stack spacing={8}  minW="100%" py={8} >
            <Text fontSize={25} fontWeight="bold">Available Rides for you </Text>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            minW={"100%"}
            minH={"100"}
            p={4}
          >
          <Stack spacing={"30"} direction="row" align="center" pt={2} justifyContent="space-evenly">
                <Text>0xAq3n94N59UIPjsnd4oUIib8Yb54Onpw</Text>
                <Text>5 min Away</Text>
                <Stack spacing={2} direction="column" align="center">
                <Button
                  colorScheme="brand"
                  variant="solid"
                  size="lg"
                  marginBottom={"2"}
                >
                  Accept ✅
                </Button>
                <Button colorScheme="brand" variant="solid" size="lg">
                  Reject ❌
                </Button>
                </Stack>
                </Stack>
          </Box>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            minW={"100%"}
            minH={"100"}
            p={4}
          >
          <Stack spacing={"30"} direction="row" align="center" pt={2} justifyContent="space-evenly">
                <Text>0xAq3n94N59UIPjsnd4oUIib8Yb54Onpw</Text>
                <Text>5 min Away</Text>
                <Stack spacing={2} direction="column" align="center">
                <Button
                  colorScheme="brand"
                  variant="solid"
                  size="lg"
                  marginBottom={"2"}
                >
                  Accept ✅
                </Button>
                <Button colorScheme="brand" variant="solid" size="lg">
                  Reject ❌
                </Button>
                </Stack>
                </Stack>
          </Box>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            minW={"100%"}
            minH={"100"}
            p={4}
          >
          <Stack spacing={"30"} direction="row" align="center" pt={2} justifyContent="space-evenly">
                <Text>0xAq3n94N59UIPjsnd4oUIib8Yb54Onpw</Text>
                <Text>5 min Away</Text>
                <Stack spacing={2} direction="column" align="center">
                <Button
                  colorScheme="brand"
                  variant="solid"
                  size="lg"
                  marginBottom={"2"}
                >
                  Accept ✅
                </Button>
                <Button colorScheme="brand" variant="solid" size="lg">
                  Reject ❌
                </Button>
                </Stack>
                </Stack>
          </Box>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            minW={"100%"}
            minH={"100"}
            p={4}
          >
          <Stack spacing={"30"} direction="row" align="center" pt={2} justifyContent="space-evenly">
                <Text>0xAq3n94N59UIPjsnd4oUIib8Yb54Onpw</Text>
                <Text>5 min Away</Text>
                <Stack spacing={2} direction="column" align="center">
                <Button
                  colorScheme="brand"
                  variant="solid"
                  size="lg"
                  marginBottom={"4"}
                >
                  Accept ✅
                </Button>
                <Button colorScheme="brand" variant="solid" size="lg">
                  Reject ❌
                </Button>
                </Stack>
                </Stack>
          </Box>
          <Text fontSize={25} fontWeight="bold" marginTop={6}>Your Past Rides</Text>

          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            minW={"100%"}
            minH={"100"}
            p={4}
            
          >
          <Stack spacing={"30"} direction="row" align="center" pt={2} justifyContent="space-evenly">
                <Text>0xAq3n94N59UIPjsnd4oUIib8Yb54Onpw</Text>
                <Text>completed in 55 min</Text>
                <Stack spacing={2} direction="column" align="center">
                <Button
                  colorScheme="brand"
                  variant="solid"
                  size="lg"
                  marginBottom={"4"}
                >
                  Accepted ✅
                </Button>
                </Stack>
                </Stack>
          </Box>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            minW={"100%"}
            minH={"100"}
            p={4}
          >
          <Stack spacing={"30"} direction="row" align="center" pt={2} justifyContent="space-evenly">
                <Text>0xAq3n94N59UIPjsnd4oUIib8Yb54Onpw</Text>
                <Text>---</Text>
                <Stack spacing={2} direction="column" align="center">
                <Button colorScheme="brand" variant="solid" size="lg">
                  Rejected ❌
                </Button>
                </Stack>
                </Stack>
          </Box>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            minW={"100%"}
            minH={"100"}
            p={4}
          >
          <Stack spacing={"30"} direction="row" align="center" pt={2} justifyContent="space-evenly">
                <Text>0xAq3n94N59UIPjsnd4oUIib8Yb54Onpw</Text>
                <Text>---</Text>
                <Stack spacing={2} direction="column" align="center">
                <Button colorScheme="brand" variant="solid" size="lg">
                  Rejected ❌
                </Button>
                </Stack>
                </Stack>
          </Box>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            minW={"100%"}
            minH={"100"}
            p={4}
          >
          <Stack spacing={"30"} direction="row" align="center" pt={2} justifyContent="space-evenly">
                <Text>0xAq3n94N59UIPjsnd4oUIib8Yb54Onpw</Text>
                <Text>completed in 35 min</Text>
                <Stack spacing={2} direction="column" align="center">
                <Button
                  colorScheme="brand"
                  variant="solid"
                  size="lg"
                  marginBottom={"4"}
                >
                  Accepted ✅
                </Button>
                </Stack>
                </Stack>
          </Box>
        </Stack>
      </Flex>
      </FullLayout>
    );
  }
  
  export default driverRide;
  
  
