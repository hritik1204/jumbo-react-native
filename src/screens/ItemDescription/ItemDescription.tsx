import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import styles from "./ItemDescription.styles";

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
} from "../../Global.styles";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";

interface DataType {
  id: number;
  name: string;
  Price: string;
  DiscountedPrice: string;
  image: any; // Use the appropriate type for image here
}

type RootStackParamList = {
  ItemDescription: { item: DataType };
};

type ItemDescriptionScreenRouteProp = RouteProp<
  RootStackParamList,
  "ItemDescription"
>;

interface ItemDescriptionProps {
  route: ItemDescriptionScreenRouteProp;
}

const ItemDescription: React.FC<ItemDescriptionProps> = ({ route }) => {
  const { item } = route.params;

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

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            marginTop: width > 369 ? verticalScale(35) : verticalScale(25),
          }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="close" size={30} color="black" />
        </TouchableOpacity>

        <View style={style.wrapper}>
          <View style={style.itemBg}>
            <Image source={item.image} style={item.id == 5 && style.tv} />
          </View>
          <View style={{ marginLeft: 5, justifyContent: "space-evenly" }}>
            <Text style={style.name}>{item.name}</Text>
            <Text style={style.rating}>⭐ 4.5</Text>
            <Text
              style={{
                fontFamily: "Inter_400Regular",
                fontSize: width > 369 ? moderateScale(14) : moderateScale(10),
                color: "#FFFFFF",
              }}
            >
              MRP:
              <Text style={style.mrp}> {item.Price}</Text>
            </Text>
            <Text
              style={{
                fontFamily: "Inter_400Regular",
                fontSize: width > 369 ? moderateScale(14) : moderateScale(10),
                color: "#FFFFFF",
              }}
            >
              Jumpo Price:
              <Text style={style.jumboPrice}> {item.DiscountedPrice} </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            borderRadius: 16,
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 12,
            paddingBottom: 12,
            backgroundColor: "#F0F0F0",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <Text>Item Description</Text>
        </View>
      </View>
      <View>
        <Button label="Buy Now" />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  wrapper: {
    width: "100%",
    borderRadius: 16,
    padding: 8,
    backgroundColor: "#00210C",
    marginTop: 51,
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  itemBg: {
    width: "45%",
    height: 164,
    borderRadius: 16,
    padding: 8,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontFamily: "Inter_700Bold",
    fontWeight: "600",
    fontSize: width > 369 ? moderateScale(16) : moderateScale(12),

    color: "#FFFFFF",
  },
  rating: {
    fontFamily: "Inter_400Regular",
    fontSize: width > 369 ? moderateScale(14) : moderateScale(10),
    color: "#FFFFFF",
  },
  mrp: {
    fontFamily: "Inter_600SemiBold",
    fontWeight: "600",
    color: "#FF3951",
  },
  jumboPrice: {
    fontFamily: "Inter_600SemiBold",
    fontWeight: "600",
  },
  tv: {
    width: width > 369 ? horizontalScale(142) : horizontalScale(107),
    height: width > 369 ? verticalScale(90) : verticalScale(80),
  },
});

export default ItemDescription;
