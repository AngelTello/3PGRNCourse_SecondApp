import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  ScrollView,
} from "react-native";
import InputNumber from "./components/InputNumber";
import PrimaryButton from "./components/PrimaryButton";
import NumberContainer from "./components/NumberContainer";

export default function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const newNumberSelectedHandler = (id, value) => {
    if (id === "first") {
      setFirstNumber(parseInt(value));
    } else {
      setSecondNumber(parseInt(value));
    }
  };

  const resetInputHandler = () => {
    setFirstNumber(0);
    setSecondNumber(0);
    setResult(0);
  };

  const mathAdditionHandler = () => {
    let mathResult = 0;
    let error = "";

    try {
      mathResult = firstNumber + secondNumber;
    } catch (error) {
      error = "Invalid addition operation";
      Alert.alert(error, "Please try again", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
    } finally {
      setErrorMessage(error);
    }

    setResult(mathResult);
  };

  const mathSubtractionHandler = () => {
    let mathResult = 0;
    let error = "";

    try {
      mathResult = firstNumber - secondNumber;
    } catch (error) {
      error = "Invalid subtraction operation";
      Alert.alert(error, "Please try again", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
    } finally {
      setErrorMessage(error);
    }

    setResult(mathResult);
  };

  const mathMultiplicationHandler = () => {
    let mathResult = 0;
    let error = "";

    try {
      mathResult = firstNumber * secondNumber;
    } catch (error) {
      error = "Invalid multiplication operation";
      Alert.alert(error, "Please try again", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
    } finally {
      setErrorMessage(error);
    }

    setResult(mathResult);
  };

  const mathDivisionHandler = () => {
    let mathResult = 0;
    let error = "";

    try {
      mathResult = firstNumber / secondNumber;
    } catch (error) {
      error = "Invalid division operation";
      Alert.alert(error, "Please try again", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
    } finally {
      setErrorMessage(error);
    }

    setResult(mathResult);
  };

  const isMathOperationsEnabled = firstNumber !== 0 && secondNumber !== 0;

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView>
        <Text style={styles.textInstructions}>
          Please introduce 2 numbers and then select the{" "}
          <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>math</Text>{" "}
          operation that you would like to do with them.
        </Text>
        <InputNumber id="first" onNumberSelected={newNumberSelectedHandler} />
        <InputNumber id="second" onNumberSelected={newNumberSelectedHandler} />
        {isMathOperationsEnabled && (
          <>
            <View>
              <Text style={styles.textInstructions}>
                Math operations available:
              </Text>
            </View>
            <View style={styles.mathOperationsAvailable}>
              <PrimaryButton onPress={mathAdditionHandler}>+</PrimaryButton>
              <PrimaryButton onPress={mathSubtractionHandler}>-</PrimaryButton>
              <PrimaryButton onPress={mathMultiplicationHandler}>
                x
              </PrimaryButton>
              <PrimaryButton onPress={mathDivisionHandler}>/</PrimaryButton>
            </View>
            {result >= 0 && errorMessage === "" && (
              <View>
                <Text style={styles.textInstructions}>
                  Math operation result
                </Text>
                <NumberContainer>{result}</NumberContainer>
              </View>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#911611",
    paddingHorizontal: 25,
  },
  textInstructions: {
    color: "#FFF",
    fontSize: 20,
    textAlign: "center",
    marginTop: 50,
  },
  mathOperationsAvailable: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 33,
    paddingVertical: 30,
  },
});
