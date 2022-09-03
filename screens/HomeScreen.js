import { View, Text } from "react-native";
import React, {useContext} from "react";
import { TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "@rneui/themed";
import { AuthContext } from "../Context/Auth/auth.conextAPI";

const HomeScreen = () => {
  const {logout} = useContext(AuthContext)
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 30,
      }}
    >
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Home Page</Text>
      <Text style={{ fontSize: 18, textAlign: "center" }}>
        You are logged in and uh can't access the authentication screens
         until uh logout
      </Text>
      <TouchableOpacity
        onPress={() => {logout()}}
        style={[
          tw`p-2 rounded mt-4`,
          { backgroundColor: "#0065ff", position: "absolute", top: 30, right: 30 },
        ]}
      >
        <Icon type="ionicon" name="log-out-outline" color={"white"} />
      </TouchableOpacity>
      <Text style={[tw`mt-4`, {color: "#0065ff", textAlign: "center"}]}>Make sure to star the repo!</Text>
    </View>
  );
};

export default HomeScreen;
