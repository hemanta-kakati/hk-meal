import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo-small.png";
import { useGlobalContext } from "./context";
const mealCategoriesUrl =
  "https://hemanta-cors.herokuapp.com/http://themealdb.com/api/json/v1/1/categories.php";
const Navbar = () => {
  const navDropdown = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const { fetchData, setMealCategories, mealCategories } = useGlobalContext();

  useEffect(() => {
    fetchData(mealCategoriesUrl).then((res) => {
      setMealCategories(res.categories);
    });
  }, []);

  const handleDropdown = () => {
    const element = navDropdown.current;

    // add show class to parent
    element.classList.add("show");

    // add show class to each child element that contains certain classes
    // childElementCount gives length of children, using it you can loop over each child
    for (let i = 0; i < element.childElementCount; i++) {
      // need to apply show only on exist classes: dropdown-toggle and dropdown-menu
      // this will open the collapsed dropdown
      if (
        element.childNodes[i].classList.contains("dropdown-toggle") ||
        element.childNodes[i].classList.contains("dropdown-menu")
      ) {
        // using a state value for toggle
        setShowDropdown(!showDropdown);

        // In bs, along while adding show classes the aria-expanded attribute is also set to true on dropdown open, so we are finding aria-expanded attribute and setting it to state value
        element.childNodes[i].hasAttribute("aria-expanded") &&
          element.childNodes[i].setAttribute("aria-expanded", showDropdown);

        // adding and removing show classes depending on state value
        showDropdown && element.childNodes[i].classList.add("show");
        !showDropdown && element.childNodes[i].classList.remove("show");
      }
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="The meal db" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              {/* <a className="nav-link" href="#">
                  Home <span className="sr-only"></span>
                </a> */}

              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Favourites
              </a>
            </li>
            <li
              className="nav-item dropdown"
              ref={navDropdown}
              onClick={handleDropdown}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {mealCategories &&
                  mealCategories.map((cat, index) => {
                    const { strCategory: name } = cat;
                    return (
                      <Link
                        className="dropdown-item"
                        key={index}
                        to={`meal/category/${name}`}
                      >
                        {name}
                      </Link>
                    );
                  })}
                {/* <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a> */}
              </div>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
