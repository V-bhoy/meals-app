// import { useContext } from "react";
import { MealsList } from "../components/meals-list/MealsList";
// import { FavouritesContext } from "../store/context/favs-context";
import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from 'react-redux';

export default function Favourites() {
    // const store = useContext(FavouritesContext);
    const favMeals = useSelector((state) => state.favouriteMeals.ids);
    const meals = MEALS.filter(meal => favMeals.includes(meal.id))
    
    if (!meals.length) {
        return <View style={styles.root}>
            <Text style={styles.text}>You have no favourite meals yet...</Text>
        </View>
    }

    return <MealsList items={meals}/>
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})