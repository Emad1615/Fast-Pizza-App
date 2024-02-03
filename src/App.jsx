import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WebFont from "webfontloader";
import Error from "./ui/Error";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Cart from "./features/cart/Cart";
import Menu, { loader as loaderMenu } from "./features/menu/Menu";
import Order, { loader as loaderOrder } from "./features/order/Order";
import CreateOrder,{action as actionOrder} from "./features/order/CreateOrder";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          element: <Home />,
          path: "/",
        },
        {
          element: <Cart />,
          path: "/cart",
        },
        {
          element: <Menu />,
          path: "/menu",
          loader: loaderMenu,
          errorElement: <Error />,
        },
        {
          element: <Order />,
          path: "/order/:orderId",
          loader: loaderOrder,
          errorElement: <Error />,
        },
        {
          element: <CreateOrder />,
          path: "/order/new",
          errorElement: <Error />,
          action:actionOrder
        },
      ],
    },
  ]);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Sora"],
      },
    });
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
