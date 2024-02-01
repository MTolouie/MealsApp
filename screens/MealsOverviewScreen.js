import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy_data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const toBeDisplayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
        imageUrl={itemData.item.imageUrl}
      />
    );
  };

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={toBeDisplayMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
