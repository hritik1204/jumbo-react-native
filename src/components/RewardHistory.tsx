import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

import {
  useFonts,
  Inter_900Black,
  Inter_700Bold,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { moderateScale, width } from "../Global.styles";

const RewardHistory = () => {
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
      <Text style={styles.coins}>Coins</Text>
      <Text style={styles.totalCoin}>1530</Text>
      <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
        <Text style={styles.textBtn}>Reward History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#59EFFF",
    elevation: 7,
    shadowColor: "black",
    borderRadius: 16,
    shadowRadius: 16,

    gap: 20,
    marginTop: 32,
    padding: 20,
  },
  coins: {
    fontSize: width > 369 ? moderateScale(22) : moderateScale(18),
    fontFamily: "Inter_700Bold",
    fontWeight: "700",
    color: "#00210C",
  },
  totalCoin: {
    fontFamily: "Inter_600SemiBold",
    fontWeight: "600",
    fontSize: width > 369 ? moderateScale(22) : moderateScale(18),
  },
  btn: {
    width: "100%",
    height: 40,
    borderRadius: 50,

    backgroundColor: "#00210C",
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    fontFamily: "Inter_700Bold",
    fontWeight: "700",
    fontSize: width > 369 ? moderateScale(16) : moderateScale(12),
    color: "white",
  },
});

export default RewardHistory;
