import { ImageBackground, Pressable, StyleSheet } from "react-native";
import React from "react";
import authStore from "../../stores/authStore";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://wallpaperbat.com/img/340673-follow-me-for-more-pinterestloredanag-instagramloredana.png",
      }}
      style={styles.backGround}
    >
      <Pressable
        onPress={() => navigation.navigate(authStore.user ? "Trips" : "signin")}
        style={styles.backGroundPress}
      ></Pressable>
      {/* <Button style={styles.homeButton}>Join us</Button> */}
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
  homeButton: { backgroundColor: "#9AD0EC", marginTop: "130%" },
});
