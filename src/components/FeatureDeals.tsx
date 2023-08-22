import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import {
  useFonts,
  Inter_900Black,
  Inter_700Bold,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from "../Global.styles";
import { MaterialIcons } from "@expo/vector-icons";

interface DataType {
  id: number;

  image: string;
}

const dealsImage: DataType[] = [
  {
    id: 1,
    image: require("../../assets/images/zomato.jpg"),
  },
  {
    id: 2,
    image: require("../../assets/images/nyka.jpg"),
  },
  {
    id: 3,
    image: require("../../assets/images/yatra.jpg"),
  },
  {
    id: 4,
    image: require("../../assets/images/kuku.jpg"),
  },
];

const FeatureDeals = () => {
  const [data, setData] = useState<DataType[]>(dealsImage);

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
      <Text style={styles.heading}>Featured Deals</Text>
      <Text style={styles.text}>
        Spend coins to claim rewards, offers from top brands, and other perks
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: 22,
        }}
      >
        {data.map((item) => (
          <View key={item.id} style={styles.deals}>
            <View style={styles.icon}>
              <MaterialIcons name="lock-outline" size={24} color="black" />
            </View>
            <Image style={styles.img} source={item.image} />
            <View style={styles.textBg}>
              <Text style={styles.redeemText}>
                Earn
                <Text style={{ fontWeight: "600" }}> 411 Coin </Text>
                more to redeem
              </Text>
            </View>
          </View>
        ))}
      </View>
      {/* <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <View>
              <Text>icon</Text>
            </View>
            <Text>
              Earn
              <Text> 411 Coin</Text>
              more to redeem
            </Text>
          </View>
        )}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",

    borderRadius: 16,
    backgroundColor: "#FDFBF7",
    padding: 20,
    marginTop: 20,
    shadowColor: "black",
    elevation: 7,
    // shadowOffset: { width: 1, height: 1 },
    // shadowOpacity: 0,
    // shadowRadius: 16,
  },
  heading: {
    fontFamily: "Inter_700Bold",
    fontWeight: "700",
    fontSize: width > 369 ? moderateScale(22) : moderateScale(18),
    color: "#121511",
  },
  text: {
    fontFamily: "Inter_400Regular",
    fontWeight: "500",
    fontSize: width > 369 ? moderateScale(14) : moderateScale(10),
    lineHeight: width > 369 ? verticalScale(24) : verticalScale(20),
    marginTop: 8,
  },
  deals: {
    width: width > 369 ? horizontalScale(150) : horizontalScale(136),
    height: 174,
    borderRadius: 16,
    borderBlockColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
    justifyContent: "space-between",
    marginBottom: 22,
  },
  icon: {
    width: width > 369 ? horizontalScale(156) : horizontalScale(136),

    borderRadius: 18,
    padding: 10,
    backgroundColor: "F0F0F0",
  },
  img: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  textBg: {
    width: "100%",
    height: 53,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    padding: 5,
  },
  redeemText: {
    fontFamily: "Inter_400Regular",
    fontSize: width > 369 ? moderateScale(15) : moderateScale(10),
    letterSpacing: 0.5,
    lineHeight: width > 369 ? verticalScale(18) : verticalScale(14),
  },
});

export default FeatureDeals;
