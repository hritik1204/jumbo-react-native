import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./LogoScreen.styles";

import AgreementPage from "../AgreementPage/AgreementPage";

const LogoScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("hello");
      navigation.navigate("Agreement");
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.img} source={require("../../assets/logo.png")} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default LogoScreen;
