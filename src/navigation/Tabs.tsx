import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Home from "../screens/Home/Home";
import Wallet from "../screens/Wallet/Wallet";
import Jackpot from "../screens/Jackpot/Jackpot";
import Rewards from "../screens/Rewards/Rewards";
import Refer from "../screens/Refer/Refer";
import Home from "../screens/Home/Home";

import { moderateScale, verticalScale, width } from "../Global.styles";
import {
  Entypo,
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "white", height: moderateScale(80) },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.container}>
              <View
                style={{
                  backgroundColor: focused ? "#59FF9D" : "",
                  width: 60,
                  paddingHorizontal: 4,
                  paddingVertical: 2,
                  borderRadius: 50,
                  alignItems: "center",
                }}
              >
                <Entypo name="home" size={size} color="black" />
              </View>
              <Text style={styles.tabText}>Home</Text>
            </View>
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.container}>
              <View
                style={{
                  backgroundColor: focused ? "#59FF9D" : "",
                  width: 60,
                  paddingHorizontal: 4,
                  paddingVertical: 2,
                  borderRadius: 50,
                  alignItems: "center",
                }}
              >
                {focused ? (
                  <Entypo name="wallet" size={24} color="black" />
                ) : (
                  <Ionicons name="wallet-outline" size={size} color="black" />
                )}
              </View>
              <Text style={styles.tabText}>Wallet</Text>
            </View>
          ),
        }}
        name="Wallet"
        component={Wallet}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.container}>
              <View
                style={{
                  backgroundColor: focused ? "#59FF9D" : "",
                  width: 60,
                  paddingHorizontal: 4,
                  paddingVertical: 2,
                  borderRadius: 50,
                  alignItems: "center",
                }}
              >
                <Entypo name="inbox" size={size} color="black" />
              </View>
              <Text style={styles.tabText}>Refer</Text>
            </View>
          ),
        }}
        name="Refer"
        component={Refer}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.container}>
              <View
                style={{
                  backgroundColor: focused ? "#59FF9D" : "",
                  width: 60,
                  paddingHorizontal: 4,
                  paddingVertical: 2,
                  borderRadius: 50,
                  alignItems: "center",
                }}
              >
                {focused ? (
                  <MaterialCommunityIcons
                    name="diamond"
                    size={size}
                    color="black"
                  />
                ) : (
                  <FontAwesome name="diamond" size={size} color="black" />
                )}
              </View>
              <Text style={styles.tabText}>Rewards</Text>
            </View>
          ),
        }}
        name="Rewards"
        component={Rewards}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.container}>
              <View
                style={{
                  backgroundColor: focused ? "#59FF9D" : "",
                  width: 60,
                  paddingHorizontal: 4,
                  paddingVertical: 2,
                  borderRadius: 50,
                  alignItems: "center",
                }}
              >
                {focused ? (
                  <MaterialCommunityIcons
                    name="crown"
                    size={24}
                    color="black"
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="crown-outline"
                    size={size}
                    color="black"
                  />
                )}
              </View>
              <Text style={styles.tabText}>Jackpot</Text>
            </View>
          ),
        }}
        name="Jackpot"
        component={Jackpot}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontSize: width > 369 ? moderateScale(12) : moderateScale(10),
    textAlign: "center",
    fontWeight: "700",
  },
});

export default Tabs;
