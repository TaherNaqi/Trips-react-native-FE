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
      <Image
        source={{
          uri: trip.image
            ? baseURL + trip.image
            : "https://previews.123rf.com/images/gustavofrazao/gustavofrazao1510/gustavofrazao151011340/62250537-road-trips-sign-with-arrow-on-road-background.jpg",
        }}
        style={styles.tripImage}
        alt={trip.name}
      />
      {trip.description && <Text>Description: {trip.description}</Text>}
      <HStack space={2} style={styles.buttonDisplay}>
        <Button
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("UpdateTrip", { trip: trip })}
        >
          Update Trip
        </Button>
        <Button
          style={styles.buttonDel}
          onPress={() => tripStore.deleteTrip(trip._id, navigation, toast)}
        >
          Delete Trip
        </Button>
      </HStack>
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
