import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from "../Global.styles";

const HomeTopView = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Text style={style.heading}>Jumbo</Text>
      <MaterialCommunityIcons
        style={style.profile}
        name="account-circle-outline"
        size={moderateScale(35)}
        color="black"
      />
    </View>
  );
};

const style = StyleSheet.create({
  heading: {
    fontFamily: "Inter_900Black",

    width: "90%",
    fontWeight: "900",
    fontSize: width > 369 ? moderateScale(36) : moderateScale(32),
    textAlign: "center",

    lineHeight: 44,
    letterSpacing: 0.5,

    marginTop: width > 369 ? verticalScale(30) : verticalScale(20),
    paddingLeft: horizontalScale(38),
    color: "#006D3A",
  },
  profile: {
    width: "10%",

    marginTop: width > 369 ? verticalScale(30) : verticalScale(20),
  },
});
export default HomeTopView;
