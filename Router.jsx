import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./src/Components/MainApp/App";
import HomePage from "./src/Components/HomePage/HomePage";
import Store from "./src/Components/Store/Store";
import Cart from "./src/Components/CartPage/Cart";
// import NavBar from "./src/Components/NavBar/NavBar";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "home",
          element: <HomePage />,
        },
        {
          path: "store",
          element: <Store />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
