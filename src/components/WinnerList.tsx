import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { moderateScale, verticalScale, width } from "../Global.styles";

import {
  useFonts,
  Inter_900Black,
  Inter_700Bold,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

interface DataType {
  id: number;
  name: string;
  city: string;
  product: string;
}

const dummyData: DataType[] = [
  {
    id: 1,
    name: "Neeraj",
    city: "Delhi",
    product: "iPhone 13 Pro Max 🎉",
  },
  {
    id: 2,
    name: "Pranay",
    city: "Rajkot",
    product: "iPhone 13 🎉",
  },
  {
    id: 3,
    name: "Hritik",
    city: "Delhi",
    product: "LG TV 🎉",
  },
];

const WinnerList = () => {
  const [data, setData] = React.useState<DataType[]>(dummyData);

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
    <View style={styles.constainer}>
      <Text style={styles.heading}>Last week’s winners</Text>
      <View>
        {dummyData.map((winner) => (
          <View style={styles.winnerContainer} key={winner.id}>
            <Text style={styles.rank}>#{winner.id}</Text>
            <Image
              style={styles.img}
              source={require("../../assets/images/winnerImage.jpg")}
            />
            <View style={{ marginLeft: 16 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.info}>{winner.name}</Text>
                <Text style={styles.info}> ({winner.city}) </Text>
              </View>
              <Text style={styles.product}>{winner.product}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    width: "100%",
    padding: 20,
    marginTop: 20,
    borderRadius: 18,
    shadowRadius: 18,
    backgroundColor: "#F0F0F0",
    shadowColor: "black",
    elevation: 7,
  },
  heading: {
    fontFamily: "Inter_700Bold",
    fontWeight: "700",
    fontSize: width > 369 ? moderateScale(22) : moderateScale(18),
    lineHeight: width > 369 ? verticalScale(24) : verticalScale(22),
    marginBottom: 22,
  },
  winnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  rank: {
    fontFamily: "Inter_600SemiBold",
    fontWeight: "600",
    fontSize: width > 369 ? moderateScale(14) : moderateScale(10),
    color: "#454745",
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 8,
  },
  info: {
    fontFamily: "Inter_600SemiBold",
    fontWeight: "600",
    fontSize: width > 369 ? moderateScale(14) : moderateScale(10),
    lineHeight: width > 369 ? verticalScale(22) : verticalScale(18),
  },
  product: {
    fontFamily: "Inter_400Regular",
    fontWeight: "400",
    fontSize: width > 369 ? moderateScale(16) : moderateScale(12),
    lineHeight: width > 369 ? verticalScale(24) : verticalScale(20),
    color: "#454745",
  },
});

export default WinnerList;
