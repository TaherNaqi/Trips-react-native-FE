//import  api file:
import api from "./api";
//libraries import:
import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this, {});
  }
  //set user token:
  setUser = (token) => {
    console.log("🚀 ~ file: authStore.js ~ line 16 ~ AuthStore ~ token", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
    AsyncStorage.setItem("myToken", token);
  };

  //user signin:
  signIn = async (user, navigation, toast) => {
    try {
      const response = await api.post("/signin", user);
      console.log(
        "🚀 ~ file: authStore.js ~ line 26 ~ AuthStore ~ signIn= ~ response",
        response
      );
      this.setUser(response.data.token);
      navigation.navigate("Trips");
    } catch (error) {
      toast.show({
        title: "Wrong Credentials",
        status: "danger",
      });
    }
  };

  //user signup:
  signUp = async (user, navigation, toast) => {
    try {
      const response = await api.post("/signup", user);
      this.setUser(response.data.token);
      navigation.goBack();
      //   navigation.navigate("TripList");  <=- ask team that where we will navigate after signup
    } catch (error) {
      toast.show;
      ({
        title: "Please Check Your Credentials",
        status: "danger",
      });
    }
  };

  //user logout:
  logout = () => {
    try {
      this.user = null;
      delete api.defaults.headers.common.Authorization;
      AsyncStorage.removeItem("myToken");
    } catch (error) {
      console.log(error);
    }
  };

  //token checker:
  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      let user = decode(token);
      if (user.exp > currentTime) {
        this.setUser(token);
      } else {
        alert("Logged out");
        this.logout();
      }
    } else {
      this.logout();
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
