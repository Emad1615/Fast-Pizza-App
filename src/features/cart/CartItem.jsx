import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helper";

function CartItem({pizza}) {
  const {id,pizzaName,quantity,unitPrice,totalPrice}=pizza;
  return (
    <li className="py-3 sm:flex sm:justify-between sm:items-center">
    <p className="font-normal tracking-widest">{quantity}x {pizzaName}</p>
    <div className="flex justify-between items-end sm:gap-5 sm:items-center">
      <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      <Button type={"small"}>DELETE</Button>
    </div>
  </li>
  );
}

export default CartItem;
