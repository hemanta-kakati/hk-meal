import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import { useParams } from "react-router-dom";
import CategoryMeal from "../CategoryMeal";

const filterByCatNameUrl =
  "https://hemanta-cors.herokuapp.com/http://themealdb.com/api/json/v1/1/filter.php?c=";
const SingleCategory = () => {
  // get url param "name" for category name
  const { name } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [categoryMeals, setCategoryMeals] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const url = `${filterByCatNameUrl}${name}`;
    const getCategoryMeals = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      //   console.log(data.meals);
      setCategoryMeals(data.meals);
      setIsLoading(false);
    };
    getCategoryMeals(url);
  }, [name]);
  if (isLoading) {
    return (
      <div className="container">
        <div className="row mt-4 text-center">
          <h3>Category: {name}</h3>
          <h3 className="mt-4">Loading...</h3>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row mt-4 text-center">
        <h3 className="mb-4">Category: {name}</h3>
        {categoryMeals.map((meal) => {
          const { idMeal: id } = meal;

          return <CategoryMeal key={id} meal={meal} />;
        })}
      </div>
    </div>
  );
};

export default SingleCategory;
