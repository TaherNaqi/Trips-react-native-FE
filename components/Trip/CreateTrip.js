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
const CreateTrip = ({ navigation }) => {
  // const [image, setImage] = useState(null);
  const [trip, setTrip] = useState({
    name: "",
    description: "",
    // image: null,
  });

  // const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     setImage(result.uri);

  //     // ImagePicker saves the taken photo to disk and returns a local URI to it
  //     let localUri = result.uri;
  //     let filename = localUri.split("/").pop();

  //     // Infer the type of the image
  //     let match = /\.(\w+)$/.exec(filename);
  //     let type = match ? `image/${match[1]}` : `image`;
  //     setTrip({ ...trip, image: { uri: localUri, name: filename, type } });
  //   }
  // };
  const handleTripName = (value) => {
    setTrip({ ...trip, name: value });
  };
  const handleTripDescription = (value) => {
    setTrip({ ...trip, description: value });
  };
  const handleCreate = () => {
    tripStore.createTrip(trip, navigation);
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
          {/* <Button onPress={pickImage}>Pick an image from camera roll</Button> */}
          <Button mt="2" style={styles.btn} onPress={handleCreate}>
            Create
          </Button>
          {/* {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100, alignSelf: "center" }}
            />
          )} */}
        </VStack>
      </Box>
    </Center>
  );
};

export default CreateTrip;

const styles = StyleSheet.create({
  btn: { backgroundColor: "#1572A1" },
});
