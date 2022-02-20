import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  useToast,
  VStack,
} from "native-base";
import tripStore from "../../stores/tripStore";
const CreateTrip = () => {
  const [trip, setTrip] = useState({ name: "", description: "" });
  const handleTripName = (value) => {
    setTrip({ ...trip, name: value });
    console.log(trip);
  };
  const handleTripDescription = (value) => {
    setTrip({ ...trip, description: value });
    console.log(trip);
  };
  const handleCreate = () => {
    tripStore.createTrip(trip);
  };
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Create a Trip
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Trip Name</FormControl.Label>
            <Input onChangeText={handleTripName} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Trip Description</FormControl.Label>
            <Input onChangeText={handleTripDescription} />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleCreate}>
            Create
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default CreateTrip;

const styles = StyleSheet.create({});
