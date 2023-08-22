import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Jackpot.styles";
import { Ionicons } from "@expo/vector-icons";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from "../../Global.styles";

import {
  useFonts,
  Inter_900Black,
  Inter_700Bold,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import JackpotPrizes from "../../components/JackpotPrizes";
import JackpotShow from "../../components/JackpotShow";
import WinnerList from "../../components/WinnerList";

const Jackpot = () => {
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
    <SafeAreaView style={styles.container}>
      <View style={style.heading}>
        <Text style={style.headingText}>Jumbo Jackpot</Text>
        <TouchableOpacity activeOpacity={0.5} style={style.btn}>
          <Ionicons name="md-bookmark-outline" size={24} color="black" />
          <Text style={style.btnText}>20</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <JackpotPrizes />
        <JackpotShow />
        <WinnerList />
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  heading: {
    marginTop: width > 369 ? verticalScale(30) : verticalScale(20),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: width > 369 ? horizontalScale(78) : horizontalScale(70),
    height: 40,
    borderRadius: 50,
    backgroundColor: "#A0E1E1",
  },
  headingText: {
    fontFamily: "Inter_700Bold",
    fontWeight: "700",
    fontSize: width > 369 ? moderateScale(30) : moderateScale(24),
    letterSpacing: width > 369 ? moderateScale(0.5) : 0,
  },
  btnText: {
    marginLeft: 3,
    fontFamily: "Inter_700Bold",
    color: "#00210C",
  },
});

export default Jackpot;
