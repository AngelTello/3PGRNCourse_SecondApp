import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ iconName }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        android_ripple={{ color: "#640233" }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Ionicons name={iconName} size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    maxWidth: 60,
  },
  buttonInnerContainer: {
    backgroundColor: "#D3D3D3",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
