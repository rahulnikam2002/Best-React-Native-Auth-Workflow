import { View, Text, ActivityIndicator } from "react-native";
import React, { useContext } from "react";
import AuthStack from "../Stacks/AuthStack";
import AppStack from "../Stacks/AppStack";
import { AuthContext } from "../../Context/Auth/auth.conextAPI";
import { NavigationContainer } from "@react-navigation/native";

export const AppNavigation = () => {
  const { isLogin, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <NavigationContainer>
        {isLogin ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
