import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, Text, View } from "react-native";
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";
import { SafeAreaView } from "react-native-safe-area-context";

const TripList = ({ navigation }) => {
  const trips = tripStore.trips.map((trip) => (
    <TripItem key={trip._id} trip={trip} navigation={navigation} />
  ));
  return <SafeAreaView style={styles.container}>{trips}</SafeAreaView>;
};

export default observer(TripList);

const styles = StyleSheet.create({ container: { flex: 1 } });
