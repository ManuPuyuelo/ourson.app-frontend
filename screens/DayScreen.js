import DayMenu from "../components/DayMenu";

import { View } from "react-native";

export default function MondayScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <DayMenu navigation={navigation} />
    </View>
  );
}
