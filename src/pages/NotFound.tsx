import { TouchableOpacity, View, Text } from "react-native";
import { useNavigate } from "react-router-native";

export default function NotFound() {
  const nav = useNavigate();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          nav("/");
        }}
      >
        <Text>Вернуться на главную</Text>
      </TouchableOpacity>
    </View>
  );
}
