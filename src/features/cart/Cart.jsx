import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { MdBorderColor } from "react-icons/md";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { formatCurrency } from "../../utils/helper";

const fakeCart=[
  {
    id:1,
    pizzaName:"Margherita",
    quantity:1,
    unitPrice:15,
    totalPrice:15
  },
  {
    id:2,
    pizzaName:"Prosciutto e Rucola",
    quantity:2,
    unitPrice:16,
    totalPrice:32
  },
  {
    id:3,
    pizzaName:"Spinach and Mushroom",
    quantity:3,
    unitPrice:18,
    totalPrice:54
  },
  {
    id:4,
    pizzaName:"Mediterranean",
    quantity:2,
    unitPrice:16,
    totalPrice:32
  },
]
function Cart() {
  const cart=fakeCart;
  const netPrice=cart.reduce((sum,arr)=>sum+=arr.totalPrice,(0));
  return (
    <div className="p-5">
      <LinkButton to={"/menu"}>
        <TiArrowBack className="inline-block" /> Back To Menu
      </LinkButton>

      <h3 className="text-center text-xl font-semibold">Your cart, Emad Ismail</h3>
      <ul className="divide-y divide-stone-300 border-b border-b-stone-300">
        {
            cart.map((item,idx)=> <CartItem key={idx} pizza={item}/>)
        }
      </ul>
      <p className="text-right  bg-stone-200 py-4 px-2 tracking-widest uppercase">Total price:&nbsp; <strong >{formatCurrency(netPrice)}</strong></p>
      <div className="space-x-3 mt-5">
        <Button to={"/order/new"} type={"primary"}><MdBorderColor className="inline-block" /> Order Pizzas</Button>
      <Button type="secondary">Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
