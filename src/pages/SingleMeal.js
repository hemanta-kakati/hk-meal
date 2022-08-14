import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import { Link, useParams } from "react-router-dom";

const mealByIdUrl =
  "https://hemanta-cors.herokuapp.com/http://themealdb.com/api/json/v1/1/lookup.php?i=";

const SingleMeal = () => {
  // extract params
  const { id } = useParams();
  const { fetchData } = useGlobalContext();
  const [meal, setMeal] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getSingleMealById = async (id) => {
      const url = `${mealByIdUrl}${id}`;

      fetchData(url).then(({ meals }) => {
        // const {
        //   idMeal: mealId,
        //   strIngredient1: ingredient1,
        //   strIngredient2: ingredient2,
        //   strIngredient3: ingredient3,
        //   strIngredient4: ingredient4,
        //   strIngredient5: ingredient5,
        //   strInstruction: instruction,
        //   strMeal: title,
        //   strMealThumb: thumbnail,
        //   strArea: mealType,
        //   strCategory: category,
        // } = meals[0];

        // const ingredients = [
        //   ingredient1,
        //   ingredient2,
        //   ingredient3,
        //   ingredient4,
        //   ingredient5,
        // ];
        setMeal(meals[0]);
        setIsLoading(false);
      });
    };

    getSingleMealById(id);
  }, []);

  if (isLoading) {
    return (
      <div className="container text-center">
        <h3>Loading...</h3>
      </div>
    );
  }

  if (!isLoading && meal) {
    const {
      idMeal: mealId,
      strIngredient1: ingredient1,
      strIngredient2: ingredient2,
      strIngredient3: ingredient3,
      strIngredient4: ingredient4,
      strIngredient5: ingredient5,
      strInstructions: instructions,
      strMeal: title,
      strMealThumb: thumbnail,
      strArea: mealType,
      strCategory: category,
    } = meal;

    const ingredients = [
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5,
    ];
    return (
      <div className="container">
        <nav aria-label="breadcrumb" className="mt-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              View Meal
            </li>
          </ol>
        </nav>
        <div className="row singleMeal ">
          <h3 className="text-center mb-4">{title}</h3>

          <div className="col-lg-9 mx-auto">
            <div className="row mt-4 gx-5 align-items-center">
              <div className="col-sm-6 col-xs-12 mb-4">
                <img src={thumbnail} alt={title} className="img-fluid" />
              </div>
              <div className="col-sm-6 col-xs-12 mb-4">
                <p>
                  <span className="meta-info">Name:</span> {title}
                </p>
                <p>
                  <span className="meta-info">Category:</span> {category}
                </p>
                <p>
                  <span className="meta-info">Meal Type:</span> {mealType}
                </p>
                <p className="instructions">
                  <span className="meta-info">Instructions:</span>{" "}
                  {instructions}
                </p>
                <p>
                  <span className="meta-info">Ingredients: </span>
                  {ingredients.map(
                    (ingredient, index) =>
                      ingredient && (
                        <span key={index} className="fw-bold">
                          {ingredient}{" "}
                        </span>
                      )
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleMeal;
