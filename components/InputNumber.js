import { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const InputNumber = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const onChangeNumberHandler = (chosenNumber) => {
    let error = "";
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      error = "Invalid number. Number must be between 1 and 99";
    }

    setErrorMessage(error);
    if (error === "") {
      props.onNumberSelected(props.id, chosenNumber);
    }
  };

  return (
    <View style={styles.inputNumberContainer}>
      <Text style={styles.textNumber}>First number:</Text>
      <TextInput
        selectTextOnFocus
        placeholder={`${props.id} number`}
        keyboardType="number-pad"
        style={styles.inputNumber}
        onChangeText={onChangeNumberHandler}
      />
      {errorMessage.trim() !== "" && (
        <Text style={styles.textNumberError}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default InputNumber;

const styles = StyleSheet.create({
  inputNumberContainer: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#D5D3D3",
    borderRadius: 10,
  },
  textNumber: {
    color: "#000",
    fontSize: 20,
    fontFamily: "montserrat",
  },
  inputNumber: {
    fontSize: 18,
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  textNumberError: {
    color: "red",
    fontSize: 14,
  },
});
