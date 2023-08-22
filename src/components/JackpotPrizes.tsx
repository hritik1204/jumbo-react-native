import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { horizontalScale, moderateScale, width } from "../Global.styles";

import {
  useFonts,
  Inter_900Black,
  Inter_700Bold,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

const JackpotPrizes = () => {
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
      <Text style={styles.text}>₹1cr tak ke prizes</Text>
      <View style={styles.money}>
        <View style={styles.cash}>
          <Text style={styles.cashText}>₹51,000 Cash</Text>
        </View>
        <Image source={require("../../assets/images/money.jpg")} />
      </View>
      <View style={styles.phone}>
        <View style={styles.phoneBg}>
          <Text style={styles.cashText}>iPhone 13 Pro Max</Text>
        </View>
        <Image
          style={styles.img2}
          source={require("../../assets/images/iphone15.jpg")}
        />
      </View>
      <View></View>
    </View>
  );
};

export default JackpotPrizes;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 304,
    marginTop: 34,
    borderRadius: 16,
    padding: 20,
    backgroundColor: "#FDFBF7",
    shadowColor: "black",

    elevation: 7,
  },
  text: {
    fontFamily: "Inter_700Bold",
    fontWeight: "700",
    fontSize: width > 369 ? horizontalScale(22) : horizontalScale(18),
  },
  money: {
    flexDirection: "row",

    justifyContent: width > 392 ? "space-evenly" : "space-between",
    marginTop: 22,
  },
  cash: {
    width: width > 369 ? horizontalScale(218) : horizontalScale(173),
    height: 104,
    borderRadius: 24,
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: "#E0AAFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: width > 392 ? horizontalScale(11) : 0,
  },
  cashText: {
    fontFamily: "Inter_700Bold",
    fontWeight: "700",
    fontSize: width > 369 ? moderateScale(22) : moderateScale(18),
  },
  phone: {
    flexDirection: "row-reverse",

    marginTop: 10,
    justifyContent: width > 392 ? "space-evenly" : "space-between",
  },
  phoneBg: {
    width: width > 369 ? horizontalScale(218) : horizontalScale(173),
    height: 104,
    borderRadius: 24,
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: "#70E000",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: width > 392 ? horizontalScale(11) : 0,
  },
  // img2: {
  //   marginLeft: width > 400 ? horizontalScale(9) : 0,
  // },
});
