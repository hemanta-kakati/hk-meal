import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import About from "./pages/About";
import Home from "./pages/Home";
import SingleMeal from "./pages/SingleMeal";
import Error from "./pages/Error";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route></Route>
    //   </Routes>
    // </Router>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="meal/:id" element={<SingleMeal />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
