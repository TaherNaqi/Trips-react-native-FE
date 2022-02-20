import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";
import tripStore from "../../stores/tripStore";
import Loading from "../Loading";
import { baseURL } from "../../stores/api";
import { Button } from "native-base";
const TripDetail = ({ route, navigation }) => {
  if (tripStore.loading) return <Loading />;
  const trip = route.params.trip;
  return (
    <SafeAreaView>
      <Text style={styles.title}>{trip.name}</Text>
      <Image source={{ uri: baseURL + trip.image }} style={styles.tripImage} />
      <Button onPress={navigation.navigate("UpdateTrip", { trip: trip })}>
        Update Trip
      </Button>
    </SafeAreaView>
  );
};

export default TripDetail;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  tripImage: {
    height: 250,
    width: "75%",
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 4,
    borderColor: "orange",
    borderRadius: 25,
  },
});
