import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://wallpaperbat.com/img/340673-follow-me-for-more-pinterestloredanag-instagramloredana.png",
      }}
      style={styles.backGround}
    >
      <Pressable
        onPress={() => navigation.navigate("Trips")}
        style={styles.backGroundPress}
      ></Pressable>
      {/* <Text style={styles.homeTitle}>Explore new worlds</Text> */}
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  backGround: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backGroundPress: { width: "100%", height: "100%" },
  homeTitle: { fontSize: 40, color: "#1572A1", fontWeight: "bold" },
});
