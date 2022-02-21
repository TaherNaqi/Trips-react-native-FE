import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Image,
  useToast,
  VStack,
} from "native-base";
import tripStore from "../../stores/tripStore";
import * as ImagePicker from "expo-image-picker";
const CreateTrip = () => {
  const [image, setImage] = useState(null);
  const [trip, setTrip] = useState({
    name: "",
    description: "",
    image: null,
  });
  console.log(trip);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setTrip({ ...trip, image: result });
    }
  };
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
          <Button onPress={pickImage}>Pick an image from camera roll</Button>
          <Button mt="2" colorScheme="indigo" onPress={handleCreate}>
            Create
          </Button>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100, alignSelf: "center" }}
            />
          )}
        </VStack>
      </Box>
    </Center>
  );
};

export default CreateTrip;

const styles = StyleSheet.create({});
