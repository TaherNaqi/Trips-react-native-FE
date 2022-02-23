import { StyleSheet, Text, View } from "react-native";
import React from "react";
import profileStore from "../../stores/profileStore";
import TripItem from "../Trip/TripItem";

const Profile = ({ route, navigation }) => {
  const user = route.params.user;
  console.log(user);
  let trips = profileStore.profiles.find(
    (profile) => profile.owner === user._id
  );
  // .map((trip) => (
  //   <TripItem key={trip._id} trip={trip} navigation={navigation} />
  // ));
  if (trips === []) return <Loading />;
  console.log(trips);

  return (
    <View>
      <Text style={styles.title}>Welcome to {user.username}'s profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: "center",
  },
});
