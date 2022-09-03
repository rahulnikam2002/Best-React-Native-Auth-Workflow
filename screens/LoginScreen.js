import "react-native-gesture-handler";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import loginImage from "../assets/loginImage.png";
import { Input } from "react-native-elements";
import { AuthContext } from "../Context/Auth/auth.conextAPI";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {login} = useContext(AuthContext)

  return (
    <View style={[tw`px-10`, { backgroundColor: "white", height: "100%" }]}>
      <View>
        <View style={[tw`pt-10`, { height: "50%" }]}>
          <Image
            source={loginImage}
            style={[tw`w-full h-full`, { resizeMode: "contain" }]}
          />
        </View>
        <View>
          <Text style={[tw`text-2xl font-bold`]}>Login</Text>
        </View>
        <View style={tw`mt-8`}>
          <Input
            placeholder="Email"
            leftIcon={{ type: "ionicon", name: "at-outline" }}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            leftIcon={{ type: "ionicon", name: "lock-closed-outline" }}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity
          onPress={() => {login(email, password)}}
          style={[tw`p-4 rounded`, { backgroundColor: "#0065ff" }]}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[tw`p-4 rounded`, {}]}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={{ textAlign: "center" }}>
            Don't have and Account?{" "}
            <Text style={{ color: "#0065ff" }}>Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
