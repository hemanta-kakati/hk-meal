import React from "react";
import { useGlobalContext } from "./context";

import Meal from "./Meal";

const Meals = () => {
  const { meals } = useGlobalContext();

  if (meals.length > 0) {
    return (
      <section id="meals">
        <div className="container">
          <h2 className="text-center mb-4">Meals</h2>
          <div className="row pt-4">
            {meals.map((meal) => {
              const { idMeal: id } = meal;

              return <Meal key={id} meal={meal} />;
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="meals">
      <div className="container">
        <div className="row pt-4">
          <h3 className="text-center">Sorry, no meal found! </h3>
        </div>
      </div>
    </section>
  );
};

export default Meals;
