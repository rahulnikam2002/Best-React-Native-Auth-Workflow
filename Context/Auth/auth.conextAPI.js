import { View, Text } from "react-native";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import * as secureStore from "expo-secure-store";
import { BASE_URL } from "../../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const setUserToken = async (token) => {
    await secureStore.setItemAsync("userToken", token);
  };

  const getUserToken = async () => {
    let token = await secureStore.getItemAsync("userToken");
  };

  const login = ({ userEmail, userPassword }) => {
    axios
      .post(`${BASE_URL}/user/login`, { userEmail, userPassword })
      .then((res) => {
        isLoading(false);
        if (res.status == 200) {
          setIsLogin(true);
          setUserToken(userToken);
        } else {
          setIsLogin(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setIsLogin(false);
        console.log(err.message);
      });
  };

  const register = ({ userName, userEmail, userPassword }) => {
    axios
      .post(`${BASE_URL}/user/register`, { userName, userEmail, userPassword })
      .then((res) => {
        isLoading(false);
        if (res.status == 200) {
          setIsLogin(true);
          setUserToken(userToken);
        } else {
          setIsLogin(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setIsLogin(false);
        console.log(err.message);
      });
  };

  const logout = async () => {
    await secureStore.deleteItemAsync("userToken");
    setIsLogin(false)
  };

  const checkLogin = async () => {
    let isUserToken = await secureStore.getItemAsync("userToken");
    if (isUserToken) {
      isLogin(true);
    } else {
      isLogin(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoading, isLogin, login, logout, checkLogin, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};
