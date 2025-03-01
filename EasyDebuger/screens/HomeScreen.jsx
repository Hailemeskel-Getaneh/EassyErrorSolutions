import React, { useRef } from "react"; // Add useRef
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Container from "../components/Container";
import CustomCard from "../components/CustomCard";
import Footer from "../components/Footer"; // Import the Footer

const languages = [
  { id: "1", name: "React", key: "react" },
  { id: "2", name: "JavaScript", key: "javascript" },
  { id: "3", name: "Node.js", key: "nodejs" },
  { id: "4", name: "MongoDB", key: "mongodb" },
  { id: "5", name: "Java", key: "java" },
  { id: "6", name: "Python", key: "python" },
  { id: "7", name: "React Native", key: "react_native" },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const flatListRef = useRef(null); // Create a ref for FlatList

  return (
    <Container>
      <FlatList
        ref={flatListRef} // Attach ref to FlatList
        data={languages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CustomCard
            title={item.name}
            description="View common errors"
            onPress={() => navigation.navigate("ErrorList", { file: item.key })}
          />
        )}
      />
      <Footer flatListRef={flatListRef} /> 
    </Container>
  );
};


export default HomeScreen;