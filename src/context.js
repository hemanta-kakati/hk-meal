import React, { useContext, useEffect, useState } from "react";

const searchMealByNameUrl =
  "https://hemanta-cors.herokuapp.com/http://themealdb.com/api/json/v1/1/search.php?s=";
const mealCategoriesUrl = "www.themealdb.com/api/json/v1/1/categories.php";
const filterByCatgeoryUrl =
  "www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [mealCategories, setMealCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  const searchMeal = (mealName) => {
    const url = `${searchMealByNameUrl}${mealName}`;
    fetchData(url).then((meals) => {
      if (meals && meals.meals) {
        setMeals(meals.meals);
      } else {
        setMeals([]);
      }
    });
  };

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      return data;
      // if (data) {
      //   setLoading(false);
      //   return data;
      // } else {
      //   setLoading(false);
      //   return [];
      // }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // on first load set default search so that user can see a list of meals on homepage by default
  useEffect(() => {
    searchMeal("a");
  }, []);

  useEffect(() => console.log(meals), [meals]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        mealCategories,
        meals,
        searchMeal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
