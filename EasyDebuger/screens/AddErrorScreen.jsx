import React, { useState } from "react";
import { TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Container from "../components/Container";
import CustomButton from "../components/CustomButton";

const AddErrorScreen = () => {
  const [errorTitle, setErrorTitle] = useState("");
  const [errorSolution, setErrorSolution] = useState("");

  const saveError = async () => {
    try {
      const existingErrors = JSON.parse(await AsyncStorage.getItem("customErrors")) || [];
      const newError = { id: Date.now(), title: errorTitle, solution: errorSolution };
      await AsyncStorage.setItem("customErrors", JSON.stringify([...existingErrors, newError]));
      setErrorTitle("");
      setErrorSolution("");
      alert("Error saved!");
    } catch (error) {
      console.log("Error saving data:", error);
    }
  };

  return (
    <Container>
      <TextInput
        style={{ backgroundColor: "#1E1E1E", padding: 10, color: "#fff", borderRadius: 8, marginBottom: 10 }}
        placeholder="Error Title"
        placeholderTextColor="#888"
        value={errorTitle}
        onChangeText={setErrorTitle}
      />
      <TextInput
        style={{ backgroundColor: "#1E1E1E", padding: 10, color: "#fff", borderRadius: 8, height: 100 }}
        placeholder="Solution"
        placeholderTextColor="#888"
        multiline
        value={errorSolution}
        onChangeText={setErrorSolution}
      />
      <CustomButton title="Save" onPress={saveError} />
    </Container>
  );
};

export default AddErrorScreen;
