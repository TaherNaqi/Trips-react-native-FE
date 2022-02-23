import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import tripStore from "../../stores/tripStore";
import Loading from "../Loading";
import { baseURL } from "../../stores/api";
import IconUpdate from "react-native-vector-icons/Feather";
import IconDelete from "react-native-vector-icons/AntDesign";
import { Center, Container, HStack, Icon, useToast } from "native-base";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
const TripDetail = ({ route, navigation }) => {
  if (tripStore.loading) return <Loading />;
  const trip = route.params.trip;
  const toast = useToast();
  return (
    <SafeAreaView>
      <Text style={styles.title}>{trip.name}</Text>
      <Image
        source={{
          uri: trip.image
            ? baseURL + trip.image
            : "https://previews.123rf.com/images/gustavofrazao/gustavofrazao1510/gustavofrazao151011340/62250537-road-trips-sign-with-arrow-on-road-background.jpg",
        }}
        style={styles.tripImage}
      />

      <HStack style={styles.row}>
        <Pressable
          onPress={() => navigation.navigate("Profile", { user: trip.owner })}
        >
          <Text style={styles.owner}>Made by {trip.owner.username}</Text>
        </Pressable>
        {authStore.user._id === trip.owner._id && (
          <View style={styles.buttonDisplay}>
            <IconUpdate
              name="edit"
              size={25}
              style={styles.buttonStyle}
              onPress={() => navigation.navigate("UpdateTrip", { trip: trip })}
            />
            <IconDelete
              name="delete"
              size={25}
              onPress={() => tripStore.deleteTrip(trip._id, navigation, toast)}
            />
          </View>
        )}
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
  owner: {
    fontSize: 25,
  },
  tripImage: {
    height: 250,
    width: "100%",
    alignSelf: "center",
    marginTop: 10,
    borderColor: "#1572A1",
    borderRadius: 25,
    marginBottom: 10,
  },
  row: { display: "flex", justifyContent: "space-between" },
  buttonDisplay: { marginRight: 5, flexDirection: "row", marginTop: 5 },
  buttonStyle: {
    marginRight: 10,
  },
});
