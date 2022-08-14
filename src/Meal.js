import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Meal = ({ meal }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const {
    idMeal: id,
    strIngredient1: ingredient1,
    strIngredient2: ingredient2,
    strIngredient3: ingredient3,
    strIngredient4: ingredient4,
    strIngredient5: ingredient5,
    strInstruction: instruction,
    strMeal: title,
    strMealThumb: thumbnail,
    strArea: mealType,
    strCategory: category,
  } = meal;
  return (
    <div key={id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card">
        <img
          className="card-img-top img-fluid"
          src={thumbnail}
          alt="Card image cap"
          style={{ height: "230px" }}
        />
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="card-title mb-0">{title}</h5>
            <button className="btn btn-outline-warning">{category}</button>
          </div>
          <p className="card-text text-secondary">Type: {mealType}</p>
          <div className="d-flex justify-content-between align-items-center">
            <a href="#" className="button primaryColor">
              Details
            </a>
            <div
              className="favourite-icon"
              style={{ color: "red" }}
              onClick={() => setIsFavourite(!isFavourite)}
            >
              {isFavourite ? (
                <AiFillHeart style={{ fontSize: "25px" }} />
              ) : (
                <AiOutlineHeart style={{ fontSize: "25px" }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
