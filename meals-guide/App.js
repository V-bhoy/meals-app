import "./gesture-handler.native.js";
import { StatusBar, StyleSheet } from "react-native";
import Categories from "./screens/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favourites from "./screens/Favourites";
import MealDetails from "./screens/MealDetails.js";
import { Ionicons } from '@expo/vector-icons'
import { Provider } from 'react-redux';
import { store } from "./store/redux/store.js";

// import FavouritesContextProvider from "./store/context/favs-context.js";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#daa520" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#f5f5dc" },
        drawerContentStyle: { backgroundColor: "#daa520" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#daa520",
        drawerActiveBackgroundColor: "#f5f5dc"
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{ title: "All Categories" , drawerIcon: ({color, size})=> <Ionicons name="list" color={color} size={size}/>}}
      />
      <Drawer.Screen name="Favourites" component={Favourites}options={{drawerIcon: ({color, size})=> <Ionicons name="star" color={color} size={size}/>}} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style={"light"} />
      {/* <FavouritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#daa520" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#f5f5dc" },
            }}
          >
            <Stack.Screen
              name="Meals Categories"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Meals Overview"
              component={MealsOverview}
              // options={({ route, navigation }) => {
              //   const { categoryId } = route.params;
              //   return {
              //     title: categoryId,
              //   };
              // }}
            />
            <Stack.Screen
              name="Meal Details"
              component={MealDetails}
              options={{
                title: "All About Meal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavouritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
