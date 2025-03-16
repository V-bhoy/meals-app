import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id)=>{}
});

export default function FavouritesContextProvider({ children }) {
    const [favMealIds, setFavMealIds] = useState([])

    function addFavourite(id) {
        setFavMealIds((current) => [...current, id]);
    }

    function removeFavourite(id) {
        setFavMealIds((current)=>current.filter(fav=>fav!==id))
    }

    const value = {
        ids: favMealIds,
        addFavourite,
        removeFavourite
    }

    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
}