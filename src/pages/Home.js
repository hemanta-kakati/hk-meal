import React from "react";
import { useGlobalContext } from "../context";
import SearchMeals from "../SearchMeals";
import Meals from "../Meals";
const Home = () => {
  const { loading, meals } = useGlobalContext();

  if (loading) {
    return (
      <>
        <SearchMeals />
        <h3 className="text-center">Loading...</h3>;
      </>
    );
  }

  if (!loading) {
    return (
      <>
        <SearchMeals />
        <Meals />
      </>
    );
  }
  // if (meals.length === 0) {
  //   return (
  //     <section id="meals">
  //       <div className="container">
  //         <div className="row pt-4">
  //           <h3 className="text-center">Sorry, no meals found! </h3>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }

  // return (
  //   <>
  //     <SearchMeals />
  //     <Meals />
  //   </>
  // );
};

export default Home;
