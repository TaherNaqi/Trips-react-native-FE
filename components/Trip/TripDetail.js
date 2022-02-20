import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";
import tripStore from "../../stores/tripStore";
import Loading from "../Loading";
import { baseURL } from "../../stores/api";
const TripDetail = ({ route }) => {
  if (tripStore.loading) return <Loading />;
  const trip = route.params.trip;
  return (
    <SafeAreaView>
      <Text style={styles.title}>{trip.name}</Text>
      <Image source={{ uri: baseURL + trip.image }} style={styles.tripImage} />
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
