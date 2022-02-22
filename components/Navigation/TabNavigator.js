import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconAdd from "react-native-vector-icons/MaterialIcons";
import StackNavigator from "./StackNavigator";
import CreateTrip from "../Trip/CreateTrip";
import { observer } from "mobx-react";
const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Trips"
        component={StackNavigator}
        options={{
          tabBarLabel: "Trips",
          headerTitle: "Trips",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="createTrip"
        component={CreateTrip}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconAdd name="add" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default observer(TabNavigator);

const styles = StyleSheet.create({});
