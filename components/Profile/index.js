import { StyleSheet, Text, View } from "react-native";
import React from "react";
import profileStore from "../../stores/profileStore";
import TripItem from "../Trip/TripItem";
import { Center, HStack, ScrollView } from "native-base";
import IconUpdate from "react-native-vector-icons/Feather";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
const Profile = ({ route, navigation }) => {
  const user = route.params.user;
  let profile = profileStore.profiles.find(
    (profile) => profile.owner._id === user._id
  );
  const trips = profile.trips.map((trip) => (
    <TripItem key={trip._id} trip={trip} navigation={navigation} />
  ));
  if (trips === []) return <Loading />;
  // console.log(profile);

  return (
    <ScrollView>
      <HStack style={styles.header}>
        <Text style={styles.title}>Welcome to {user.username}'s profile</Text>
        {authStore.user._id === profile.owner._id && (
          <IconUpdate
            name="edit"
            size={25}
            style={styles.buttonStyle}
            onPress={() =>
              navigation.navigate("Update Profile", { profile: profile })
            }
          />
        )}
      </HStack>
      <HStack>
        {profile.bio && (
          <>
            <Text style={styles.bio}>Bio: </Text>
            <Text style={styles.bioText}>{profile.bio}</Text>
          </>
        )}
      </HStack>
      <Text style={styles.triplist}>{profile.owner.username}' trips</Text>
      {trips}
    </ScrollView>
  );
};

export default observer(Profile);

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 20,
  },
  bio: { marginLeft: 5, fontSize: 18, fontWeight: "bold" },
  bioText: { fontSize: 18 },
  triplist: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    textDecorationLine: "underline",
  },
});
