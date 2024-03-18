import { formatCurrency } from "../../utils/helper";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({pizza}) {
  const {pizzaId,name,quantity,unitPrice,totalPrice}=pizza;
  return (
    <li className="py-3 sm:flex sm:justify-between sm:items-center">
    <p className="font-normal tracking-widest">{quantity}x {name}</p>
    <div className="flex justify-between items-end sm:gap-10 sm:items-center mt-5">
      <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      <UpdateItemQuantity pizzaId={pizzaId} currQuantity={quantity}/>
      <DeleteItem pizzaId={pizzaId}/>
    </div>
  </li>
  );
}

export default CartItem;
