import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import { MealsList } from "../components/meals-list/MealsList";
// import { useRoute } from "@react-navigation/native";

export default function MealsOverview({ route, navigation }) {
  // const route = useRoute();
  const { categoryId } = route.params;
  const meals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);
 
   return <MealsList items={meals}/>

}


