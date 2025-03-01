// Footer.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Footer = ({ errorCount, languageKey, scrollRef }) => {
  const navigation = useNavigation();

  const scrollToTop = () => {
    if (scrollRef?.current) {
      scrollRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>
        {`${errorCount} Error${errorCount === 1 ? "" : "s"}`}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.backButton}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={scrollToTop} style={styles.topButton}>
          <Text style={styles.buttonText}>Back to Top</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: "absolute", // Fix footer to bottom
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1, // Ensure it stays above content
  },
  footerText: {
    fontSize: 12,
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  backButton: {
    padding: 8,
    backgroundColor: "#007AFF",
    borderRadius: 5,
    marginRight: 10,
  },
  topButton: {
    padding: 8,
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 12,
    color: "#fff",
  },
});

export default Footer;