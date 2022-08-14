import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./context";

const SearchMeals = () => {
  const { searchMeal } = useGlobalContext();
  const [mealName, setMealName] = useState("");
  const searchMealInput = useRef("");

  const searchMealHandler = () => {
    setMealName(searchMealInput.current.value);
    searchMeal(mealName);
  };

  // whenever user give input for meal search then fetch data
  // useEffect(() => {
  //   searchMeal(mealName);
  // }, [mealName]);

  return (
    <section id="searchMeal">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6 mx-auto col-sm-12">
            <div className="searchCard">
              <h5 className="primaryColor mb-4 ">Search your favourite meal</h5>
              <input
                type="text"
                className="form-control"
                value={mealName}
                onChange={() => searchMealHandler()}
                id="searchMealInput"
                ref={searchMealInput}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchMeals;
