import SingleRecipe from "../components/SingleRecipe";

import { View } from "react-native";

export default function SearchedRecipeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <SingleRecipe navigation={navigation} />
    </View>
  );
}
