import { Link } from "react-router-dom";

function CartOverView() {
  return (
    <div className="text-white bg-slate-800 p-2">
      <blockquote className="border-l-4 border-yellow-500 pl-2 font-semibold text-xl bg-slate-700 p-1 rounded">
        23 pizzas $23.45
      </blockquote>
      <Link to="/cart" className="text-blue-400 text-center block">
        {" "}
        Open Cart 🛒
      </Link>
    </div>
  );
}

export default CartOverView;
