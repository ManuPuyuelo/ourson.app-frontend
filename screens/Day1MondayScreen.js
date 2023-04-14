import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  ImageBackground,
  Image,
} from "react-native";

import Header from "../components/Header";
export default function Day1MondayScreen({ navigation }) {
  return (
    <>
      <Header navigation={navigation} currentScreen="MondayScreen" />
      <Text style={styles.title}>Lundi</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
  },
  title: {
    fontFamily: "Bryndan_Write",
    fontSize: 57,
    fontWeight: 400,
    lineHeight: 64,
    textAlign: "center",
  },
});
