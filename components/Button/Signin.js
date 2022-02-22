import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";
import { observer } from "mobx-react";

const Signin = () => {
  const navigation = useNavigation;
  return (
    <View>
      <Button onPress={() => navigation.navigate("signin")}>Sign In</Button>
    </View>
  );
};

export default observer(Signin);
