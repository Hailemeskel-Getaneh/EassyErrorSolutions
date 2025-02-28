import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ErrorListScreen from "../screens/ErrorListScreen";
import AddErrorScreen from "../screens/AddErrorScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#121212" },
          headerTintColor: "#FFD700",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Error Tracker" }} />
        <Stack.Screen name="ErrorList" component={ErrorListScreen} options={{ title: "Errors" }} />
        <Stack.Screen name="AddError" component={AddErrorScreen} options={{ title: "Add Error" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
