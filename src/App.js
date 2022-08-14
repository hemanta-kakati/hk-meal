import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGlobalContext } from "./context";

import Header from "./Header";
import SearchMeals from "./SearchMeals";
import Meals from "./Meals";
import Loader from "./Loader";

function App() {
  const { loading } = useGlobalContext();

  if (!loading) {
    return (
      <>
        <Header />
        <SearchMeals />
        <Meals />
      </>
    );
  }
  if (loading) {
    return (
      <>
        <Header />
        <SearchMeals />
        <h3 className="text-center">Loading...</h3>;
      </>
    );
  }
}

export default App;
