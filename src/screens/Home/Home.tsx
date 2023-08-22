import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import {
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from "../../Global.styles";
import styles from "./Home.styles";
import HomeTopView from "../../components/HomeTopView";

interface DataType {
  id: number;
  name: string;
  Price: string;
  DiscountedPrice: string;
  image: string;
  width?: boolean;
}

const dummyData: DataType[] = [
  {
    id: 1,
    name: "Boat Headphones",
    Price: "₹2,000",
    DiscountedPrice: "₹1200",
    image: require("../../../assets/images/earphones.jpg"),
  },
  {
    id: 2,
    name: "LG Washing Machine",
    Price: "₹15,000",
    DiscountedPrice: "₹12,000",
    image: require("../../../assets/images/washingmachine.jpg"),
  },
  {
    id: 3,
    name: "1gm Gold Bar",
    Price: "₹6,900",
    DiscountedPrice: "₹5,400",
    image: require("../../../assets/images/goldbar.jpg"),
  },
  {
    id: 4,
    name: "Apple iPhone 14",
    Price: "₹75,000",
    DiscountedPrice: "₹48,000",
    image: require("../../../assets/images/phone.jpg"),
  },
  {
    id: 5,
    name: "Samsung Smart TV",
    Price: "₹30,000",
    DiscountedPrice: "₹20,000",
    image: require("../../../assets/images/tv.jpg"),
    width: true,
  },
  {
    id: 6,
    name: "Bajaj Mixer Grinder",
    Price: "₹8,200",
    DiscountedPrice: "₹6,500",
    image: require("../../../assets/images/mixer.jpg"),
  },
];

const Home = () => {
  const [data, setData] = useState<DataType[]>(dummyData);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <HomeTopView />

      {/* <ScrollView style={style.itemContainer}>
        {data.map((item) => (
          <View style={style.itemWrapper} key={item.id}>
            <View>
              <Image source={item.image} />
            </View>
            <Text>{item.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text>{item.Price}</Text>
              <Text>{item.DiscountedPrice}</Text>
            </View>
          </View>
        ))}
      </ScrollView> */}
      <FlatList
        contentContainerStyle={{
          height: 700,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: width > 369 ? "space-between" : "space-evenly",
          alignItems: "center",
          marginTop: verticalScale(30),
        }}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={1}
            style={style.itemWrapper}
            key={item.id}
            onPress={() => navigation.navigate("ItemDescription", { item })}
          >
            <View style={style.imageContainer}>
              <Image
                style={[style.img, item.id == 5 && style.tv]}
                source={item.image}
              />
            </View>
            <Text style={style.itemName}>{item.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                onPress={() => navigation.navigate("ItemDescription", { item })}
                style={style.price}
              >
                {item.Price}
              </Text>
              <Text style={style.discounted}>{item.DiscountedPrice}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  itemWrapper: {
    width: width > 369 ? horizontalScale(170) : horizontalScale(150),
    height: verticalScale(191),
    alignItems: "center",

    padding: 12,

    gap: 8,
    borderRadius: 25,
    backgroundColor: "#F0F0F0",
    marginBottom: 20,
  },
  imageContainer: {
    width: width > 369 ? horizontalScale(152) : horizontalScale(115),
    // height: width > 369 ? verticalScale(116) : verticalScale(110),
    height: verticalScale(116),
    backgroundColor: "white",
    paddingHorizontal: horizontalScale(60),
    paddingVertical: verticalScale(8),
    alignItems: "center",
    borderRadius: 22,
    // marginLeft: "auto",
    // marginRight: "auto",
  },
  tv: {
    width: width > 369 ? horizontalScale(142) : horizontalScale(107),
    height: width > 369 ? verticalScale(90) : verticalScale(80),
  },
  itemName: {
    fontSize: width > 369 ? moderateScale(14) : moderateScale(9),
    fontWeight: "600",
  },
  price: {
    fontWeight: "400",
    fontSize: width > 369 ? moderateScale(14) : moderateScale(10),
    color: "#A8200D",
    textDecorationLine: "line-through",
  },
  discounted: {
    fontWeight: "400",
    fontSize: width > 369 ? moderateScale(14) : moderateScale(10),
    color: "#163300",
    marginLeft: horizontalScale(3),
  },
});

export default Home;
