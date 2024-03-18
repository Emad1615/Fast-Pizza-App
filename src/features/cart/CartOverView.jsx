import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helper";
import { totalPrice, totalQuantity } from "./cartSlice";

function CartOverView() {
  const totalItemQuantity=useSelector(totalQuantity)
  const totalItemprice=useSelector(totalPrice)
  if(!totalItemQuantity) return null
  return (
    <div className="text-white bg-slate-800 p-2 flex justify-between items-center px-5">
      <blockquote className="space-x-3 border-l-4 border-yellow-500 pl-2 font-semibold text-xl bg-slate-700 p-1 rounded uppercase">
        <span>{totalItemQuantity} pizzas</span> 
        <span>{formatCurrency(totalItemprice)}</span>
      </blockquote>
      <Link to="/cart" className="text-blue-400 text-center block uppercase ">
        Open Cart 🛒
      </Link>
    </div>
  );
}

export default CartOverView;
