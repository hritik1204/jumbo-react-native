import React, { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import LogoScreen from "./src/screens/LogoScreen/LogoScreen";
import AgreementPage from "./src/screens/AgreementPage/AgreementPage";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home/Home";

import Tabs from "./src/navigation/Tabs";
import ItemDescription from "./src/screens/ItemDescription/ItemDescription";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Logo"
          component={LogoScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Agreement"
          component={AgreementPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Tabs"
          component={Tabs}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ItemDescription"
          component={ItemDescription}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#59ff9d",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   img: {
//     width: 128,
//     height: 128,
//   },
// });

export default App;
