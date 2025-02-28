import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../context/ThemeContext";

const CustomCard = ({ title, description, onPress }) => {
  const { darkMode } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: darkMode ? "#1E1E1E" : "#F0F0F0",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
      }}
    >
      <Text style={{ color: "#FFD700", fontSize: 16 }}>{title}</Text>
      <Text style={{ color: darkMode ? "#ffffff" : "#000000", fontSize: 14, marginTop: 5 }}>
        {description}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomCard;
