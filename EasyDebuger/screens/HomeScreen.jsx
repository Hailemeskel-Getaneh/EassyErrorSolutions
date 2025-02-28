import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Container from "../components/Container";
import CustomCard from "../components/CustomCard";

const languages = [
  { id: "1", name: "React", file: "react.json" },
  { id: "2", name: "JavaScript", file: "javascript.json" },
  { id: "3", name: "Node.js", file: "node.json" },
  { id: "4", name: "MongoDB", file: "mongodb.json" },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <FlatList
        data={languages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CustomCard
            title={item.name}
            description="View common errors"
            onPress={() => navigation.navigate("ErrorList", { file: item.file })}
          />
        )}
      />
    </Container>
  );
};

export default HomeScreen;
