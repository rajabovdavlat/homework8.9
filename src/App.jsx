import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} /> {/* Footer есть */}
          <Route path='about' element={<About />} /> {/* Footer есть */}
          <Route path='recipes' element={<Recipes />} /> {/* Footer нет */}
          <Route path='recipe/:id' element={<Recipe />} />{" "}
          {/* Footer нет */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
