import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
//import libraries:
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
//import store:
import profileStore from "../../stores/profileStore";

const Updateprofile = ({ route, navigation }) => {
  if (profileStore.loading) return <Loading />;
  const { profile } = route.params;
  const [updatedProfile, setUpdatedProfile] = useState({
    bio: profile.bio,
    image: profile.image,
    _id: profile._id,
    trips: profile.trips,
    owner: profile.owner,
  });
  const toast = useToast();
  const handleProfilebio = (value) => {
    setUpdatedProfile({ ...updatedProfile, bio: value });
  };
  const handleProfileImage = (value) => {
    setUpdatedProfile({ ...updatedProfile, image: value });
  };
  const handleUpdate = () => {
    profileStore.updateProfile(updatedProfile, toast);
    navigation.goBack();
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
          Update Profile
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Profile Bio</FormControl.Label>
            <Input value={updatedProfile.bio} onChangeText={handleProfilebio} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Profile Image</FormControl.Label>
            <Input
              value={updatedProfile.image}
              onChangeText={handleProfileImage}
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

export default observer(Updateprofile);

const styles = StyleSheet.create({
  updateButton: { backgroundColor: "#1572A1" },
});
