import React from "react";
import { VStack, Box, Divider } from "native-base";
import { StyleSheet, Text } from "react-native";
import { observer } from "mobx-react";
import { Image } from "native-base";
import { baseURL } from "../../stores/api";
import { TouchableOpacity } from "react-native-gesture-handler";
const TripItem = ({ trip, navigation }) => {
  return (
    // <>
    <Box border="1" borderRadius="md">
      <VStack space="4" divider={<Divider />}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TripDetail", { trip: trip })}
        >
          <Box px="5" pt="4" space={4}>
            <Image
              source={{
                uri: trip.image
                  ? trip.image
                  : "https://previews.123rf.com/images/gustavofrazao/gustavofrazao1510/gustavofrazao151011340/62250537-road-trips-sign-with-arrow-on-road-background.jpg",
                // ? baseURL + trip.image
              }}
              style={styles.tripImage}
              alt={trip.name}
            />
            <Text
              style={styles.title}
              onPress={() => navigation.navigate("TripDetail", { trip: trip })}
            >
              {trip.name}
            </Text>
            <Box px="4"></Box>
          </Box>
        </TouchableOpacity>
      </VStack>
    </Box>
  );
};

export default observer(TripItem);

const styles = StyleSheet.create({
  title: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
    textTransform: "capitalize",
  },
  tripImage: {
    height: 200,
    width: "100%",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 12,
  },
});
