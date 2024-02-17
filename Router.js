import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./src/Components/MainApp/App";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "home",
          element: "",
        },
        {
          path: "store",
          element: "",
        },
        {
          path: "cart",
          element: "",
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
