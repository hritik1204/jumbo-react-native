import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from "../Global.styles";

import {
  useFonts,
  Inter_900Black,
  Inter_700Bold,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

const JackpotShow = () => {
  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
    Inter_700Bold,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Watch Jumbo Jackpot Show</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: 8,
        }}
      >
        <View style={{ justifyContent: "space-evenly" }}>
          <Text style={styles.info}>Live every Sunday 5pm</Text>
          <Text style={styles.info}>Prize draw and winner announcement</Text>
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="youtube" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    borderRadius: 16,
    padding: 20,
    backgroundColor: "#FF3951",
    shadowColor: "black",

    elevation: 7,
    marginTop: 20,
  },
  icon: {
    width: width > 369 ? horizontalScale(56) : horizontalScale(46),
    height: width > 369 ? verticalScale(56) : verticalScale(46),
    borderRadius: 16,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontFamily: "Inter_700Bold",
    fontWeight: "700",
    fontSize: width > 369 ? moderateScale(22) : moderateScale(16),
  },
  info: {
    fontFamily: "Inter_600SemiBold",
    fontWeight: "600",
    fontSize: width > 369 ? moderateScale(14) : moderateScale(9),
    color: "white",
  },
});

export default JackpotShow;
