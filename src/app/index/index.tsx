import { Alert, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Selected } from "@/components/Selected";
import { Ingredient } from "@/components/Ingredient";
import { useState } from "react";
import { router } from "expo-router";

export default function Index() {
  // To each ingredient that is selected
  const [selected, setSelected] = useState<string[]>([]);
  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value));
    }
    setSelected((state) => [...state, value]);
  }

  // To clear items selected
  function handleClearSelected() {
    Alert.alert("Limpar", "Deseja limpar tudo?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => setSelected([]) },
    ]);
  }

  // To navigate into Recipes page
  function handleSearch() {
    router.navigate("/recipes/");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que você escolheu.
      </Text>
      <ScrollView
        contentContainerStyle={styles.ingredientList}
        showsVerticalScrollIndicator={false}
      >
        {Array.from({ length: 45 }).map((item, index) => (
          <Ingredient
            key={index}
            name="Avocado"
            image={"../../../images/avocado.png"}
            selected={selected.includes(String(index))}
            onPress={() => handleToggleSelected(String(index))}
          />
        ))}
      </ScrollView>
      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onClear={handleClearSelected}
          onSearch={handleSearch}
        />
      )}
    </View>
  );
}
