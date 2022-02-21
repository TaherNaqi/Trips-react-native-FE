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
      onPress={() => navigation.navigate("Trips")}
      source={{
        uri: "https://wallpaperbat.com/img/340673-follow-me-for-more-pinterestloredanag-instagramloredana.png",
      }}
      style={styles.backGround}
    >
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
  homeTitle: { fontSize: 40, color: "#1572A1", fontWeight: "bold" },
});
