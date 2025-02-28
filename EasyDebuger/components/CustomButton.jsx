import React from "react";
import { TouchableOpacity, Text } from "react-native";

const CustomButton = ({ title, onPress, bgColor = "#FFD700", textColor = "#121212" }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: bgColor,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <Text style={{ color: textColor, fontWeight: "bold", fontSize: 16 }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
