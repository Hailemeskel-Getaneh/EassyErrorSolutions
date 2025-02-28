import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import errorData from "../data/index"; 

const ErrorListScreen = ({ route }) => {
  const { file } = route.params;
  const errors = errorData[file] || [];
  const [selectedError, setSelectedError] = useState(null); 

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
      <View style={{ marginBottom: 10 }}>
        <TouchableOpacity onPress={() => handleErrorPress(item)}>
          <Text>{`${index + 1}. ${item.title}`}</Text>
        </TouchableOpacity>
        
        {selectedError?.id === item.id && (
          <View style={{ marginLeft: 10 }}>
            <Text><strong>Message: </strong>{item.message}</Text>

            <Text><strong>Causes: </strong></Text>
            {item.causes.map((cause, idx) => (
              <TouchableOpacity key={idx} onPress={() => handleCausePress(cause)}>
                <Text>{`${idx + 1}. ${cause}`}</Text>
              </TouchableOpacity>
            ))}

            <Text><strong>Solutions: </strong></Text>
            {item.solutions.map((solution, idx) => (
              <TouchableOpacity key={idx} onPress={() => handleSolutionPress(solution)}>
                <Text>{`${idx + 1}. ${solution}`}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={errors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ErrorListScreen;
