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
import React from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import FullLayout from "@/layout/fullLayout";
import { useRouter } from "next/router";
// import { useFileUpload } from 'use-file-upload';
// import { Image } from "@chakra-ui/core";

function CarRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  //   // const [image, setImage] = useState(null);

  //   // const [file, selectFile] = useFileUpload()
  //   const ImageUpload = () => {
  //     const [image, setImage] = useState(null);

  //     // const handleImageChange = () => {
  //     //   // const uploadedImage = EventTarget[0];
  //     //   // const reader = new FileReader();

  //     //   // reader.onload = () => {
  //     //   // setImage(reader.result);
  //     // }
  //   }
  // }

  return (
    <FullLayout>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Register Your Car Here
              </Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                One Step Away to start Working with GYRO. ✌️
              </Text>
            </Stack>

            <Text
              fontWeight="semibold"
              fontSize="medium"
              marginTop={10}
              marginBottom={3}
            >
              Upload Your Vechile Insurance:{" "}
            </Text>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="file"
              isRequired
              marginBottom={10}
            />
            <Text fontWeight="semibold" fontSize="medium" marginBottom={3}>
              Upload Your Registration Certificate (RC):{" "}
            </Text>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="file"
              isRequired
              marginBottom={10}
            />
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                colorScheme={"brand"}
                onClick={() => {
                  router.push("/driver_ride");
                }}
              >
                Send for Verification
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </FullLayout>
  );
}

export default CarRegister;
