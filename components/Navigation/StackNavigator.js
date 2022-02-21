import React from "react";
//libraries call:
import { createStackNavigator } from "@react-navigation/stack";
//import components:
import TripDetail from "../Trip/TripDetail";
import TripList from "../Trip/TripList";
import CreateTrip from "../Trip/CreateTrip";
import UpdateTrip from "../Trip/UpdateTrip";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";

const TabNavigator = ({ navigation, route }) => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="signup"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#1572A1",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Trips" component={TripList} />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={({ route, navigation }) => ({
          headerTitle: route.params.trip.name,
        })}
      />
      <Screen name="CreateTrip" component={CreateTrip} />
      <Screen name="UpdateTrip" component={UpdateTrip} />
      <Screen name="signin" component={Signin} />
      <Screen name="signup" component={Signup} />
    </Navigator>
  );
};
export default TabNavigator;
