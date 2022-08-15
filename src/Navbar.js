import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo-small.png";
import { useGlobalContext } from "./context";
const mealCategoriesUrl =
  "https://hemanta-cors.herokuapp.com/http://themealdb.com/api/json/v1/1/categories.php";
const Navbar = () => {
  const navDropdown = useRef(null);
  const hamburgerMenu = useRef(null);
  const collapseMenu = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const { fetchData, setMealCategories, mealCategories } = useGlobalContext();

  useEffect(() => {
    // fetchData(mealCategoriesUrl).then((res) => {
    //   setMealCategories(res.categories);
    // });
    const getCategories = async () => {
      const res = await fetch(mealCategoriesUrl);
      const data = await res.json();
      setMealCategories(data.categories);
    };

    getCategories();
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

  const hamburgerMenuHandler = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
    const element = hamburgerMenu.current;
    showHamburgerMenu
      ? collapseMenu.current.classList.add("collapse")
      : collapseMenu.current.classList.remove("collapse");
    showHamburgerMenu
      ? element.classList.add("collapsed")
      : element.classList.remove("collapsed");
    element.setAttribute("aria-expanded", !showHamburgerMenu);
    for (let i = 0; i < element.childElementCount; i++) {
      showHamburgerMenu && element.childNodes[i].classList.add("show");
      !showHamburgerMenu && element.childNodes[i].classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <img src={logo} alt="The meal db" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={hamburgerMenuHandler}
          ref={hamburgerMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          ref={collapseMenu}
          id="navbarText"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
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
              className="nav-item dropdown categories"
              ref={navDropdown}
              onClick={handleDropdown}
            >
              <Link
                className="nav-link dropdown-toggle"
                to={"#"}
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
              </Link>
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
