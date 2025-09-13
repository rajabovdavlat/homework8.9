import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";


const About = lazy(() => import("./pages/About"));
const RecipeDetails = lazy(() => import("./pages/RecipeDetails"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} /> 
          <Route
            path='about'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            }
          />{" "}
          <Route path='recipes' element={<Recipes />} /> 
          <Route
            path='recipes/:id'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <RecipeDetails />
              </Suspense>
            }
          />{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
