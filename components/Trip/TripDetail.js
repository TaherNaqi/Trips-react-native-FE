import {
  ImageBackground,
  Pressable,
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
import { HStack, useToast } from "native-base";
import { observer } from "mobx-react";
import IconLogOut from "react-native-vector-icons/MaterialIcons";
import IconGoBack from "react-native-vector-icons/AntDesign";
import authStore from "../../stores/authStore";
const TripDetail = ({ route, navigation }) => {
  if (tripStore.loading) return <Loading />;
  const trip = route.params.trip;
  const toast = useToast();
  return (
    <>
      <ImageBackground
        style={styles.background}
        imageStyle={{ borderRadius: 20, resizeMode: "cover" }}
        source={{
          uri: trip.image
            ? baseURL + trip.image
            : "https://previews.123rf.com/images/gustavofrazao/gustavofrazao1510/gustavofrazao151011340/62250537-road-trips-sign-with-arrow-on-road-background.jpg",
        }}
      >
        {/* <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]} /> */}
        {/* <LinearGradient
          
          colors={["rgba(0,0,0,0.8)", "transparent"]}
        /> */}

        <HStack style={styles.rowHeader}>
          <IconGoBack
            name="arrowleft"
            size={25}
            style={styles.headerBtn}
            onPress={() => navigation.goBack()}
          />
          <IconLogOut
            name="logout"
            size={25}
            style={styles.headerBtn}
            onPress={() => authStore.logout(navigation)}
          />
        </HStack>
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
                onPress={() =>
                  navigation.navigate("UpdateTrip", { trip: trip })
                }
              />
              <IconDelete
                name="delete"
                style={styles.delete}
                size={25}
                onPress={() =>
                  tripStore.deleteTrip(trip._id, navigation, toast)
                }
              />
            </View>
          )}
        </HStack>
      </ImageBackground>
    </>
  );
};

export default observer(TripDetail);

const styles = StyleSheet.create({
  owner: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    marginTop: "80%",
  },
  rowHeader: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    marginTop: 60,
    padding: 10,
  },
  buttonDisplay: { marginRight: 5, flexDirection: "row", marginTop: 5 },
  headerDisplay: { flexDirection: "row", marginTop: 5 },
  buttonStyle: {
    marginRight: 10,
    color: "white",
  },
  headerBtn: {
    color: "black",
  },
  delete: { color: "white" },
  background: {
    width: "100%",
    height: "80%",
  },
});
