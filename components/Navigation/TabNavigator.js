import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import StackNavigator from "./StackNavigator";
import CreateTrip from "../Trip/CreateTrip";
const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          onPress: () => navigation.navigate("Home"),

          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="createTrip"
        component={CreateTrip}
        options={{
          onPress: () => navigation.navigate("Home"),

          tabBarIcon: ({ color, size }) => (
            <Icon name="createTrip" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
