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
import React, { useEffect, useState, useContext } from "react";
import tw from "tailwind-react-native-classnames";
import loginImage from "../assets/registerImage.png";
import { Input } from "react-native-elements";
import { AuthContext } from "../Context/Auth/auth.conextAPI";

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {register} = useContext(AuthContext)
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
        <Text style={[tw`text-2xl font-bold`]}>Sign up</Text>
      </View>
      <View style={tw`mt-8`}>
        <Input
          placeholder="Name"
          leftIcon={{ type: "ionicon", name: "person-outline" }}
          onChangeText={(text) => setName(text)}
        />
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
        style={[tw`p-4 rounded`, { backgroundColor: "#0065ff" }]}
        onPress={() => {register(name, email, password)}}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Register
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[tw`p-4 rounded`, {}]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={{ textAlign: "center" }}>
          Already have and Account?{" "}
          <Text style={{ color: "#0065ff" }}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default RegisterScreen;
