import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverView from "../features/cart/CartOverView";
import Loader from "./Loader";

function AppLayout() {
  const Navigation = useNavigation();
  const isLoading = Navigation.state === "loading";
  return (
    <div className="app">
      <Header />

      {isLoading ? <Loader /> : <Outlet />}
      <CartOverView />
    </div>
  );
}

export default AppLayout;
