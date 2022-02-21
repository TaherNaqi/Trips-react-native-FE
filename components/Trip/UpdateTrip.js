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
import { observer } from "mobx-react";
import tripStore from "../../stores/tripStore";
const UpdateTrip = ({ route, navigation }) => {
  const { trip } = route.params;
  const [updatedTrip, setUpdatedTrip] = useState({
    name: trip.name,
    description: trip.description,
    _id: trip._id,
  });
  const toast = useToast();
  const handleTripName = (value) => {
    setUpdatedTrip({ ...updatedTrip, name: value });
  };
  const handleTripDescription = (value) => {
    setUpdatedTrip({ ...updatedTrip, description: value });
  };
  const handleUpdate = () => {
    tripStore.updateTrip(updatedTrip, toast);
    navigation.navigate("Trips");
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
            <Input value={updatedTrip.name} onChangeText={handleTripName} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Trip Description</FormControl.Label>
            <Input
              value={updatedTrip.description}
              onChangeText={handleTripDescription}
            />
          </FormControl>
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={handleUpdate}
            style={styles.updateButton}
          >
            Update
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default observer(UpdateTrip);

const styles = StyleSheet.create({
  updateButton: { backgroundColor: "#1572A1" },
});
