import React from "react";
import { useGlobalContext } from "../context";
import SearchMeals from "../SearchMeals";
import Meals from "../Meals";
const Home = () => {
  const { loading } = useGlobalContext();
  if (!loading) {
    return (
      <>
        <SearchMeals />
        <Meals />
      </>
    );
  }
  if (loading) {
    return (
      <>
        <SearchMeals />
        <h3 className="text-center">Loading...</h3>;
      </>
    );
  }
};

export default Home;
