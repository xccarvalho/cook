import { ScrollView } from "react-native";
import { styles } from "./styles";
import { Ingredient, IngredientProps } from "../Ingredient";

type Props = {
  ingredients: IngredientProps[];
};

export function IngredientList({ ingredients }: Props) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.name}
          name={ingredient.name}
          image={ingredient.image}
          selected={ingredient.selected}
        />
      ))}
    </ScrollView>
  );
}

/*
export function IngredientList() {
  // To each ingredient that is selected
  const [selected, setSelected] = useState<string[]>([]);
  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value));
    }
    setSelected((state) => [...state, value]);
  }
  return (
    <ScrollView
        contentContainerStyle={styles.ingredientList}
        showsVerticalScrollIndicator={false}
      >
        {Array.from({ length: 45 }).map((item, index) => (
          <Ingredient
            key={index}
            name="Tomato"
            image="../../../images/tomato.png"
            selected={selected.includes(String(index))}
            onPress={() => handleToggleSelected(String(index))}
          />
        ))}
      </ScrollView>
  )
}
*/
