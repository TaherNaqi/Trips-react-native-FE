import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TripDetail from "../Trip/TripDetail";
import TripList from "../Trip/TripList";
import CreateTrip from "../Trip/CreateTrip";
import UpdateTrip from "../Trip/UpdateTrip";
const TabNavigator = ({ navigation, route }) => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="Trips"
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
    </Navigator>
  );
};
export default TabNavigator;
