import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, Text, View } from "react-native";
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";
import { ScrollView } from "native-base";
import Loading from "../Loading";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Loading />;
  const trips = tripStore.trips.map((trip) => (
    <TripItem key={trip._id} trip={trip} navigation={navigation} />
  ));
  return <ScrollView style={styles.list}>{trips}</ScrollView>;
};

export default observer(TripList);

const styles = StyleSheet.create({
  list: {},
});
