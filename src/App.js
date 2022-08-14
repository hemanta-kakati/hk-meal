import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import About from "./pages/About";
import Home from "./pages/Home";
import SingleMeal from "./pages/SingleMeal";
import SingleCategory from "./pages/SingleCategory";
import Error from "./pages/Error";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="meal/:id" element={<SingleMeal />} />
        <Route path="meal/category/:name" element={<SingleCategory />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
