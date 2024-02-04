import { View, FlatList,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealItem from "./MealItem";
const MealsList = ({toBeDisplayMeals}) => {
  const navigation = useNavigation();

  const mealsPressHandler = (mealId) => {
    navigation.navigate("MealDetails", {
      mealId: mealId,
    });
  };
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        id={itemData.item.id}
        title={itemData.item.title}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
        imageUrl={itemData.item.imageUrl}
        onPress={mealsPressHandler}
      />
    );
  };

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

export default MealsList;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });
  
