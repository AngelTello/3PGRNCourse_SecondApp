import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import InputNumber from "./components/InputNumber";
import PrimaryButton from "./components/PrimaryButton";
import NumberContainer from "./components/NumberContainer";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";
import IconButton from "./components/IconButton";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const [fontsLoaded] = useFonts({
    "montserrat": require("./assets/fonts/Montserrat-Regular.ttf"),
    "coming-soon": require("./assets/fonts/ComingSoon-Regular.ttf")
  });

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

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.jpg")}
          resizeMode="cover"
          style={styles.rootContainer}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootContainer}>
            <ScrollView>
              <Text style={styles.textInstructions}>
                Please introduce 2 numbers and then select the{" "}
                <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  math
                </Text>{" "}
                operation that you would like to do with them.
              </Text>
              <View>
                <InputNumber
                  id="first"
                  onNumberSelected={newNumberSelectedHandler}
                />
                <InputNumber
                  id="second"
                  onNumberSelected={newNumberSelectedHandler}
                />
              </View>
              <View>
                <Text style={styles.textInstructions}>
                  Math operations available:
                </Text>
              </View>
              <View style={styles.mathOperationsAvailable}>
                <PrimaryButton onPress={mathAdditionHandler}>+</PrimaryButton>
                <PrimaryButton onPress={mathSubtractionHandler}>
                  -
                </PrimaryButton>
                <PrimaryButton onPress={mathMultiplicationHandler}>
                  x
                </PrimaryButton>
                <PrimaryButton onPress={mathDivisionHandler}>/</PrimaryButton>
              </View>
              {result >= 0 && errorMessage === "" && (
                <View style={styles.resultContainer}>
                  <Text style={styles.textInstructions}>
                    Math operation result
                  </Text>
                  <NumberContainer>
                    <Image source={require("./assets/images/result.png")} />
                    {result}
                  </NumberContainer>
                  <IconButton iconName="return-up-back" />
                </View>
              )}
            </ScrollView>
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
  },
  textInstructions: {
    color: "#FFF",
    fontSize: 20,
    textAlign: "center",
    marginTop: 50,
    paddingHorizontal: 25,
    fontFamily: "coming-soon",
  },
  mathOperationsAvailable: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 33,
    paddingVertical: 30,
  },
  backgroundImage: {
    opacity: 0.15,
  },
  resultContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
