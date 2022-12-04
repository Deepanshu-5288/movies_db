import { useContext, createContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = createContext();

const AppProvider = (({children}) => {
    const [query, setQuery] = useState("Batman");
    const {movies, loading, error} = useFetch(`&s=${query}`);
    return <AppContext.Provider value={{
        setQuery, movies, loading, error, query
    }} >
        {children}
    </AppContext.Provider>
})

export const useGlobalContext = () =>{
    return useContext(AppContext);
}


export {AppContext, AppProvider};