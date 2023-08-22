import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

import {
  useFonts,
  Inter_900Black,
  Inter_700Bold,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

import { StyleSheet, View } from "react-native";

import { SafeAreaView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "./AgreementPage.styles";
import Button from "../../components/Button";
import {
  height,
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from "../../Global.styles";
import Tabs from "../../navigation/Tabs";

const AgreementPage = () => {
  const navigation = useNavigation();
  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
    Inter_700Bold,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handlePress = () => {
    navigation.navigate("Tabs");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={style.heading}>Jumbo</Text>
      <Text style={style.text}>Bharat ka sabse rewarding shopping app ✨</Text>
      <View>
        <Text style={style.policy}>
          By continuing you agree to our
          <Text style={style.textLink}> Terms of Use </Text>
          and
          <Text style={style.textLink}> Privacy Policy</Text>
        </Text>
        <Button onPress={handlePress} label="Shuru Karein" />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  heading: {
    fontFamily: "Inter_900Black",
    fontWeight: "900",
    fontSize: width > 369 ? moderateScale(36) : moderateScale(32),
    textAlign: "center",
    lineHeight: 44,
    letterSpacing: 0.5,
    marginTop: width > 369 ? verticalScale(50) : verticalScale(40),
    // marginTop: width > 359 ? 50 : 40,
    color: "#006D3A",
  },
  text: {
    fontFamily: "Inter_700Bold",
    fontSize: width > 369 ? moderateScale(36) : moderateScale(24),
    lineHeight: width > 369 ? horizontalScale(44) : moderateScale(32),
    fontWeight: "700",
    width:
      width > 369 ? horizontalScale(0.8 * width) : horizontalScale(0.9 * width),
    // marginTop: width > 359 ? "80%" : "28%",
  },
  policy: {
    fontFamily: "Inter_400Regular",
    fontWeight: "400",
    fontSize: width > 369 ? horizontalScale(14) : horizontalScale(10),
    color: "#454745",
    width: "100%",
    textAlign: "center",
    // marginTop: width > 359 ? "50%" : "52%",
  },
  textLink: {
    fontFamily: "Inter_600SemiBold",
    fontWeight: "600",
    textDecorationLine: "underline",
    color: "black",
  },
});

export default AgreementPage;
