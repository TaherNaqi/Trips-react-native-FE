import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { observer } from "mobx-react";
const TripItem = ({ trip, navigation }) => {
  return (
    <Text onPress={() => navigation.navigate("TripDetail", { trip: trip })}>
      {trip.name}
    </Text>
  );
};

export default observer(TripItem);

const styles = StyleSheet.create({});
