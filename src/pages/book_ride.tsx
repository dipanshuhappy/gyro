import MapWithADirectionsRenderer from "@/components/MapWithADirectionsRenderer";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

function BookRide() {
  const handlePickUpSelect = async (value: any) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setPickUpAddress(value);
    setPickUpCoordinates(latLng);
  };
  const handleDropSelect = async (value: any) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setDropAddress(value);
    setDropCoordinates(latLng);
  };
  const [pickUpAddress, setPickUpAddress] = useState("");
  const [loading, setLoading] = useState(true);

  const [pickUpCoordinates, setPickUpCoordinates] = useState<{
    lat: number | null;
    lng: number | null;
  }>({
    lat: 28.4506465,
    lng: 77.5841978,
  });
  const [dropAddress, setDropAddress] = useState("");
  const [dropCoordinates, setDropCoordinates] = useState<{
    lat: number | null;
    lng: number | null;
  }>({
    lat: 28.4745029,
    lng: 77.4826241,
  });
  const origin = { lat: 37.7749, lng: -122.4194 };
  const destination = { lat: 47.6062, lng: -122.3321 };

  return (
    <Box width={"100%"} height="100vh">
      <Box marginInline={"6"}>
        <Text
          textAlign={"left"}
          fontWeight="bold"
          fontSize={"2xl"}
          marginTop="6"
          color={"purple"}
        >
          From
        </Text>
        <Flex mt="3" alignItems="center" border={"2px"} borderColor="purple">
          <PlacesAutocomplete
            value={pickUpAddress}
            onChange={setPickUpAddress}
            onSelect={handlePickUpSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <Flex direction="column" minWidth={"100%"}>
                <Input
                  minWidth={"100%"}
                  borderColor="white"
                  border="2px solid white"
                  {...getInputProps({ placeholder: "Enter Pick Up Location " })}
                />
                <Flex direction="column" width={"100%"}>
                  {loading ? <div>...loading</div> : null}
                  {suggestions.map((suggestion) => {
                    return (
                      <Flex
                        p="5px"
                        border="1px solid #585858"
                        cursor="pointer"
                        {...getSuggestionItemProps(suggestion)}
                      >
                        {suggestion.description}
                      </Flex>
                    );
                  })}
                </Flex>
              </Flex>
            )}
          </PlacesAutocomplete>
        </Flex>
        <Text
          textAlign={"left"}
          fontWeight="bold"
          fontSize={"2xl"}
          marginTop="6"
          colorScheme={"purple"}
        >
          To
        </Text>
        <Flex mt="3" alignItems="center" border={"2px"} borderColor="purple">
          <PlacesAutocomplete
            value={dropAddress}
            onChange={setDropAddress}
            onSelect={handleDropSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <Flex direction="column" minWidth={"100%"}>
                <Input
                  minWidth={"100%"}
                  borderColor="white"
                  border="2px solid white"
                  {...getInputProps({ placeholder: "Enter Pick Up Location " })}
                />
                <Flex direction="column" width={"100%"}>
                  {loading ? <div>...loading</div> : null}
                  {suggestions.map((suggestion) => {
                    return (
                      <Flex
                        p="5px"
                        border="1px solid #585858"
                        cursor="pointer"
                        {...getSuggestionItemProps(suggestion)}
                      >
                        {suggestion.description}
                      </Flex>
                    );
                  })}
                </Flex>
              </Flex>
            )}
          </PlacesAutocomplete>
        </Flex>
        <Button
          colorScheme={"purple"}
          justifySelf="center"
          alignSelf={"center"}
          marginTop="8"
          marginInline="auto"
          marginBottom={"8"}
          onClick={() => {
            setLoading(true);
            console.log({ pickUpCoordinates });
            console.log({ dropCoordinates });
          }}
        >
          Get Price
        </Button>
      </Box>
      <MapWithADirectionsRenderer
        origin={pickUpCoordinates}
        destination={dropCoordinates}
      />
      <Button
        colorScheme={"purple"}
        position="absolute"
        bottom={"10%"}
        size="sm"
        padding={"5"}
        marginInline="auto"
        left={"50%"}
        onClick={() => {
          setLoading(true);
          console.log({ pickUpCoordinates });
          console.log({ dropCoordinates });
        }}
      >
        Find Cab
      </Button>
    </Box>
  );
}

export default BookRide;
