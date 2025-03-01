import React, { useState, useRef } from "react"; // Add useRef
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import errorData from "../data/index";
import Footer from "../components/Footer"; // Import the Footer

const ErrorListScreen = ({ route }) => {
  const { file } = route.params;
  const navigation = useNavigation();
  console.log("File key:", file); // Debugging
  console.log("Error data:", errorData[file]); // Debugging

  const errors = errorData[file] || [];
  const [selectedError, setSelectedError] = useState(null);
  const scrollRef = useRef(null); // Ref for ScrollView

  const handleErrorPress = (error) => {
    setSelectedError(selectedError?.id === error.id ? null : error);
  };

  const handleCausePress = (cause) => {
    alert(`Cause: ${cause}`);
  };

  const handleSolutionPress = (solution) => {
    alert(`Solution: ${solution}`);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.errorItem}>
        <TouchableOpacity onPress={() => handleErrorPress(item)}>
          <Text style={styles.errorTitle}>{`${index + 1}. ${item.title}`}</Text>
        </TouchableOpacity>

        {selectedError?.id === item.id && (
          <View style={styles.errorDetails}>
            <Text style={styles.errorMessage}>{`Message: ${item.message}`}</Text>

            <Text style={styles.sectionTitle}>Causes:</Text>
            {item.causes.map((cause, idx) => (
              <TouchableOpacity key={idx} onPress={() => handleCausePress(cause)}>
                <Text style={styles.causeSolution}>{`${idx + 1}. ${cause}`}</Text>
              </TouchableOpacity>
            ))}

            <Text style={styles.sectionTitle}>Solutions:</Text>
            {item.solutions.map((solution, idx) => (
              <TouchableOpacity key={idx} onPress={() => handleSolutionPress(solution)}>
                <Text style={styles.causeSolution}>{`${idx + 1}. ${solution}`}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.screenContainer}>
      <ScrollView
        ref={scrollRef} // Attach ref to ScrollView
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.container}>
          <FlatList
            data={errors}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            scrollEnabled={false} // Disable FlatList's built-in scrolling
          />
        </View>
      </ScrollView>
      <Footer
        errorCount={errors.length}
        languageKey={file}
        scrollRef={scrollRef} // Pass ref to Footer
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1, // Ensure the outer container fills the screen
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 60, // Add padding to prevent content overlap with fixed footer
  },
  container: {
    padding: 10,
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  errorItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 2,
  },
  errorTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  errorDetails: {
    marginTop: 10,
  },
  errorMessage: {
    fontStyle: "italic",
    marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginTop: 10,
  },
  causeSolution: {
    marginLeft: 10,
  },
});

export default ErrorListScreen;