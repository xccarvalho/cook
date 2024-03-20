import { FlatList, Text, View } from "react-native";
import { style } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Recipe } from "@/components/Recipe";

export default function Recipes() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          onPress={() => router.back()}
        />
        <Text style={style.title}>Ingredientes</Text>
      </View>
      <FlatList
        data={["1"]}
        renderItem={() => (
          <Recipe
            recipe={{
              name: "Omelete",
              image:
                "https://receitas123.com/wp-content/uploads/2023/06/omelete-fit.png",
              minutes: 10,
            }}
          />
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
}
