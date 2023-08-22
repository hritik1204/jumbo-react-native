import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import {
  useFonts,
  Inter_900Black,
  Inter_700Bold,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { moderateScale, verticalScale, width } from "../Global.styles";
import Jackpot from "../screens/Jackpot/Jackpot";

interface Props {
  label: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({ label, onPress }) => {
  const navigation = useNavigation();
  let [fontsLoaded, fontError] = useFonts({
    Inter_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={styles.container}
    >
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 48,
    backgroundColor: "#59FF9D",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 30,
  },
  btnText: {
    fontFamily: "Inter_700Bold",
    fontSize: width > 369 ? moderateScale(16) : moderateScale(12),
    lineHeight: width > 369 ? verticalScale(22) : verticalScale(18),
  },
});
