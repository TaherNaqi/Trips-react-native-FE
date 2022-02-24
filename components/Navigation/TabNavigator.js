import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconAccount from "react-native-vector-icons/MaterialCommunityIcons";
import IconAdd from "react-native-vector-icons/MaterialIcons";
import StackNavigator from "./StackNavigator";
import CreateTrip from "../Trip/CreateTrip";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
import Signup from "../Auth/Signup";
import { useNavigation } from "@react-navigation/native";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      {authStore.user ? (
        <>
          <Tab.Screen
            name="Trips"
            component={StackNavigator}
            options={{
              tabBarLabel: "Home",
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
              tabBarLabel: "Create a trip",
              tabBarIcon: ({ color, size }) => (
                <IconAdd name="add" color={color} size={size} />
              ),
            }}
          />
        </>
      ) : (
        <Tab.Screen
          name="signup"
          component={StackNavigator}
          options={{
            tabBarLabel: "Join us",
            tabBarIcon: ({ color, size }) => (
              <IconAccount
                name="account"
                color={color}
                size={size}
                onPress={() => navigation.navigate("signup")}
              />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
};

export default observer(TabNavigator);

const styles = StyleSheet.create({});
