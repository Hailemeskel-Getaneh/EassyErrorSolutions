import React from "react";
import { View } from "react-native";
import { useTheme } from "../context/ThemeContext";

const Container = ({ children, style }) => {
  const { darkMode } = useTheme();
  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: darkMode ? "#121212" : "#ffffff",
          padding: 20,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Container;
