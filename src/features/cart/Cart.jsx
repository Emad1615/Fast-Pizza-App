import { TiArrowBack } from "react-icons/ti";
import { MdBorderColor } from "react-icons/md";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { formatCurrency } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, getCart, totalPrice } from "./cartSlice";
import EmptyCart from "./EmptyCart";
function Cart() {
  const {username}=useSelector(store=>store.user)
  const cart=useSelector(getCart);
  const dispatch=useDispatch();
  const totalItemPrice=useSelector(totalPrice);
  if(cart.length===0) return <EmptyCart/>
  return (
    <div className="p-5">
      <LinkButton to={"/menu"}>
        <TiArrowBack className="inline-block" /> Back To Menu
      </LinkButton>

      <h3 className="text-center text-xl font-semibold">Your cart, {username}</h3>
      <ul className="divide-y divide-stone-300 border-b border-b-stone-300">
        {
            cart.map((item,idx)=> <CartItem key={idx} pizza={item}/>)
        }
      </ul>
      {cart.length!==0 && <p className="text-right  bg-stone-200 py-4 px-2 tracking-widest uppercase">Total price:&nbsp; <strong >{formatCurrency(totalItemPrice)}</strong></p>}
      <div className="space-x-3 mt-5">
        <Button to={"/order/new"} type={"primary"}><MdBorderColor className="inline-block" /> Order Pizzas</Button>
      <Button type="secondary" onClick={()=> dispatch(clearItem())}>Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
