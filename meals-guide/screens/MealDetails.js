import { Image, Text, View, StyleSheet, ScrollView } from "react-native"
import { MEALS } from "../data/dummy-data";
import { MealDetail } from "../components/MealDetail";
import { SubTitle } from "../components/meal-detail/SubTitle";
import { List } from "../components/meal-detail/List";
import {  useLayoutEffect } from "react";
import { IconButton } from "../components/IconButton";
import { useSelector, useDispatch } from 'react-redux';
import { addFavourite, removeFavourite } from "../store/redux/favourites";
// import { FavouritesContext } from "../store/context/favs-context";

export default function MealDetails({ route, navigation }) {
    // const store = useContext(FavouritesContext)
    const favMealIds = useSelector((state) => state.favouriteMeals.ids);
    const dispatch = useDispatch();

    const { mealId } = route.params;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    const isMealFav = favMealIds.includes(mealId);

    function changeFavStatusHandler() {
        if (isMealFav) {
            // store.removeFavourite(mealId);
            dispatch(removeFavourite({ id: mealId }));
        }
        else {
            //  store.addFavourite(mealId);
             dispatch(addFavourite({ id: mealId }));
        }
    }
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: ()=><IconButton icon={isMealFav ? 'star' : 'star-outline'} color={'white'} onPress={changeFavStatusHandler}/>
        })
    }, [navigation, changeFavStatusHandler])

    return (
      <ScrollView style={styles.root}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetail
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <SubTitle title={"Ingredients"} />
            <List data={selectedMeal.ingredients} />
            <SubTitle title={"Steps"} />
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        margin: 8
    },
    listContainer: {
        width: '80%',
    },
    listOuterContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})