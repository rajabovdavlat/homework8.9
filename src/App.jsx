import MainLayout from "./layouts/MainLayout";

// pages
import { About, Home, Recipe, Recipes } from "./pages"

// main layout
const App = () => {
  const routes = createBrowserRouter([
    {
      path: './',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/recipes",
          element: <Recipes />,
        },
        {
          path: "/recipe/:id",
          element: <Recipe />,
        }
      ]
    }
  ])
  return <RouterProvider router={routes} />;
}

export default App