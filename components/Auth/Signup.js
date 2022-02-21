//import stores:
import authStore from "../../stores/authStore";
//import libraries:
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Image,
  Input,
  useToast,
  VStack,
} from "native-base";

const Signup = ({ navigation }) => {
  const toast = useToast();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    image: "",
  });
  //handle submit:
  const handleSubmit = () => {
    authStore.signUp(user, navigation, toast);
  };

  //image picker:
  const [image, setImage] = useState(null);
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
    }
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input
              onChange={(value) => setUser({ ...user, username: value })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              onChange={(value) => setUser({ ...user, password: value })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>E-mail</FormControl.Label>
            <Input onChange={(value) => setUser({ ...user, email: value })} />
          </FormControl>
          <FormControl>
            {/* <FormControl.Label>Image</FormControl.Label>
            <Input onChange={(value) => ({ ...user, image: value })} /> */}
            <FormControl.Label>Image</FormControl.Label>
            <Button
              colorScheme="indigo"
              title="Pick an image from gallery"
              onPress={pickImage}
            >
              Pick an image from camera roll
            </Button>
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            )}
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};
export default Signup;
