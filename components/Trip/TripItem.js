import React from "react";
import { VStack, Box, Divider } from "native-base";
import { StyleSheet, Text } from "react-native";
import { observer } from "mobx-react";
import { Image } from "native-base";
import { baseURL } from "../../stores/api";
const TripItem = ({ trip, navigation }) => {
  return (
    // <>
    <Box border="1" borderRadius="md">
      <VStack space="4" divider={<Divider />}>
        <Box px="1" pt="4">
          <Text
            style={styles.title}
            onPress={() => navigation.navigate("TripDetail", { trip: trip })}
          >
            {trip.name}
          </Text>
          <Image
            source={{
              uri: trip.image
                ? baseURL + trip.image
                : "https://previews.123rf.com/images/gustavofrazao/gustavofrazao1510/gustavofrazao151011340/62250537-road-trips-sign-with-arrow-on-road-background.jpg",
            }}
            style={styles.tripImage}
            alt={trip.name}
          />
          <Box px="4"></Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default observer(TripItem);

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  tripImage: {
    height: 200,
    width: "85%",
    alignSelf: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#1572A1",
    borderRadius: 25,
    marginBottom: 25,
  },
});
