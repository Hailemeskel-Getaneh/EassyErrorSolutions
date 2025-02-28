import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Container from "../components/Container";
import CustomCard from "../components/CustomCard";

const ErrorListScreen = ({ route }) => {
  const { file } = route.params;
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const fetchErrors = async () => {
      try {
        const response = await require(`../data/${file}`);
        setErrors(response);
      } catch (error) {
        console.log("Error loading data:", error);
      }
    };
    fetchErrors();
  }, []);

  return (
    <Container>
      <FlatList
        data={errors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CustomCard title={item.title} description={item.message} />
        )}
      />
    </Container>
  );
};

export default ErrorListScreen;
