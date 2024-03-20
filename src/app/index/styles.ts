import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
  },
  title: {
    fontSize: theme.fonts.size.heading.xl,
    fontFamily: theme.fonts.family.bold,
    lineHeight: 44,
    marginTop: 42,
  },
  subtitle: {
    fontFamily: theme.fonts.family.regular,
  },
  message: {
    fontSize: theme.fonts.size.body.md,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.gray_400,
    marginTop: 12,
    marginBottom: 38,
  },
  ingredientList: {
    flexWrap: "wrap",
    flexDirection: "row",
    paddingBottom: 200,
    gap: 12,
  },
});
