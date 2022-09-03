import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppNavigation } from './Navigation/AppNavigation/App.Navigation';
import {AuthProvider} from './Context/Auth/auth.conextAPI'

export default function App() {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}