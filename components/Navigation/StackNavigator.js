import React from "react";
//libraries call:
import { createStackNavigator } from "@react-navigation/stack";
//import components:
import TripDetail from "../Trip/TripDetail";
import TripList from "../Trip/TripList";
import CreateTrip from "../Trip/CreateTrip";
import UpdateTrip from "../Trip/UpdateTrip";
import authStore from "../../stores/authStore";
import Home from "../Home";
import IconLogOut from "react-native-vector-icons/MaterialIcons";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";
import Icon from "react-native-vector-icons/MaterialIcons";

import Profile from "../Profile";
const TabNavigator = ({ navigation, route }) => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#9AD0EC",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },

        headerRight: () => (
          <Icon
            size={25}
            name="logout"
            onPress={({ navigation }) => authStore.logout(navigation)}
          />
        ),
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="Trips"
        component={TripList}
        options={{
          headerRight: () => (
            <IconLogOut
              name="logout"
              size={30}
              onPress={() => authStore.logout(navigation)}
            />
          ),
        }}
      />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={({ route, navigation }) => {
          return {
            headerTitle: route.params.trip.name,
            headerRight: () => (
              <IconLogOut
                name="logout"
                size={30}
                onPress={() => authStore.logout(navigation)}
              />
            ),
          };
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={({ route, navigation }) => {
          return { headerTitle: route.params.user.username };
        }}
      />
      <Screen name="CreateTrip" component={CreateTrip} />
      <Screen name="UpdateTrip" component={UpdateTrip} />
      <Screen name="signin" component={Signin} />
      <Screen name="signup" component={Signup} />
    </Navigator>
  );
};
export default TabNavigator;
