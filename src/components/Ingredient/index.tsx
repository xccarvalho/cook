import { Pressable, Image, Text, PressableProps } from "react-native";
import { styles } from "./styles";

export type IngredientProps = {
  name: string;
  image: string;
  selected?: boolean;
};

export function Ingredient({
  name,
  image,
  selected = false,
  ...rest
}: IngredientProps & PressableProps) {
  return (
    // Pressable it's a interaction component
    <Pressable
      style={[styles.container, selected && styles.selected]}
      {...rest}
    >
      <Image
        source={require("../../../images/apple.png")}
        style={styles.image}
      />
      {/* <Image source={{ uri: image }} style={styles.image} /> */}
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  );
}
