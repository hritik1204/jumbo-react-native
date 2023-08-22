import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Rewards.style";
import { moderateScale, verticalScale, width } from "../../Global.styles";
import {
  useFonts,
  Inter_900Black,
  Inter_700Bold,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import RewardHistory from "../../components/RewardHistory";
import FeatureDeals from "../../components/FeatureDeals";

// import { ScrollView } from "react-native-gesture-handler";

const Rewards = () => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={style.heading}>Rewards</Text>
        <RewardHistory />
        <FeatureDeals />
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  heading: {
    marginTop: width > 369 ? verticalScale(30) : verticalScale(20),
    fontFamily: "Inter_700Bold",
    fontWeight: "700",
    fontSize: width > 369 ? moderateScale(30) : moderateScale(26),
    color: "#00210C",
  },
});

export default Rewards;
