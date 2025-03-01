import React, { useState, useRef } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import errorData from "../data/index";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar"; // Import SearchBar

const ErrorListScreen = ({ route }) => {
  const { file } = route.params;
  const navigation = useNavigation();

  const errors = errorData[file] || [];
  const [selectedError, setSelectedError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const scrollRef = useRef(null);

  const handleErrorPress = (error) => {
    setSelectedError(selectedError?.id === error.id ? null : error);
  };

  const filteredErrors = errors.filter((error) =>
    error.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item, index }) => (
    <View style={styles.errorItem}>
      <TouchableOpacity onPress={() => handleErrorPress(item)}>
        <Text style={styles.errorTitle}>{`${index + 1}. ${item.title}`}</Text>
      </TouchableOpacity>

      {selectedError?.id === item.id && (
        <View style={styles.errorDetails}>
          <Text style={styles.errorMessage}>{`Message: ${item.message}`}</Text>
          <Text style={styles.sectionTitle}>Causes:</Text>
          {item.causes.map((cause, idx) => (
            <Text key={idx} style={styles.causeSolution}>{`${idx + 1}. ${cause}`}</Text>
          ))}
          <Text style={styles.sectionTitle}>Solutions:</Text>
          {item.solutions.map((solution, idx) => (
            <Text key={idx} style={styles.causeSolution}>{`${idx + 1}. ${solution}`}</Text>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.screenContainer}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ScrollView ref={scrollRef} contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <FlatList
            data={filteredErrors} // Use filtered errors
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
      <Footer errorCount={filteredErrors.length} languageKey={file} scrollRef={scrollRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: { flex: 1 },
  scrollContainer: { flexGrow: 1, paddingBottom: 60 },
  container: { padding: 10, backgroundColor: "#f5f5f5", flex: 1 },
  errorItem: { marginBottom: 10, padding: 10, backgroundColor: "#fff", borderRadius: 5, elevation: 2 },
  errorTitle: { fontSize: 16, fontWeight: "bold" },
  errorDetails: { marginTop: 10 },
  errorMessage: { fontStyle: "italic", marginBottom: 10 },
  sectionTitle: { fontWeight: "bold", marginTop: 10 },
  causeSolution: { marginLeft: 10 },
});

export default ErrorListScreen;
