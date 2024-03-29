import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./src/Components/MainApp/App";
import HomePage from "./src/Components/HomePage/HomePage";
import Store from "./src/Components/Store/Store";
import Cart from "./src/Components/CartPage/Cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          element: <HomePage />,
          index: true,
        },
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
