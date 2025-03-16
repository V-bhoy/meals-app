import { View, FlatList, StyleSheet } from 'react-native';
import { MealItem } from './MealItem';

export function MealsList({items}) {
      const renderMeal = (itemData) => {
        const { id, title, imageUrl, duration, complexity, affordability } =
          itemData.item;
        const mealItemProps = {
          id,
          title,
          imageUrl,
          duration,
          complexity,
          affordability,
        };
        return <MealItem {...mealItemProps} />;
      };

      return (
        <View style={styles.container}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMeal}
          />
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});