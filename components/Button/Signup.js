import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";
import { observer } from "mobx-react";

const Signup = () => {
  const navigation = useNavigation;
  return (
    <View>
      <Button onPress={() => navigation.navigate("signup")}>Sign Up</Button>
    </View>
  );
};

export default observer(Signup);
