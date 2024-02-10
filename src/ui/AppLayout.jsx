import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverView from "../features/cart/CartOverView";
import Loader from "./Loader";

function AppLayout() {
  const Navigation = useNavigation();
  const isLoading = Navigation.state === "loading";
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Header />
        <main className="overflow-scroll">
        {isLoading ? <Loader /> : <Outlet />}
        </main>
      <CartOverView />
    </div>
  );
}

export default AppLayout;
