import { StyleSheet, Text, View } from "react-native";
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
const UpdateTrip = ({ trip }) => {
  const [updatedTrip, setUpdatedTrip] = useState({ name: "", description: "" });
  console.log(trip);
  const handleTripName = (value) => {
    setUpdatedTrip({ ...trip, name: value });
  };
  const handleTripDescription = (value) => {
    setUpdatedTrip({ ...trip, description: value });
  };
  const handleUpdate = () => {
    tripStore.updateTrip(trip._id, updatedTrip);
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
          Update trip
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
          <Button mt="2" colorScheme="indigo" onPress={handleUpdate}>
            Update
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default UpdateTrip;

const styles = StyleSheet.create({});
