import { Image, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import tripStore from "../../stores/tripStore";
import Loading from "../Loading";
import { baseURL } from "../../stores/api";
import { Button, HStack, Text, useToast } from "native-base";
import { observer } from "mobx-react";
const TripDetail = ({ route, navigation }) => {
  if (tripStore.loading) return <Loading />;
  const trip = route.params.trip;
  const toast = useToast();
  return (
    <SafeAreaView>
      <Text style={styles.title}>{trip.name}</Text>
      <Image source={{ uri: baseURL + trip.image }} style={styles.tripImage} />
      <Button onPress={() => navigation.navigate("UpdateTrip", { trip: trip })}>
        Update Trip
      </Button>
    </SafeAreaView>
  );
};

export default observer(TripDetail);

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  tripImage: {
    height: 300,
    width: "100%",
    alignSelf: "center",
    marginTop: 10,
    borderColor: "#1572A1",
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonDisplay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    width: "25%",
    backgroundColor: "#1572A1",
  },
  buttonDel: {
    width: "25%",
    backgroundColor: "red",
  },
});
