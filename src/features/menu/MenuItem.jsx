import { formatCurrency } from "../../utils/helper";
import Button from './../../ui/Button'
import { addItem, getItemQuantityById } from "../cart/cartSlice";
import {  useDispatch, useSelector} from "react-redux";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
function MenuItem({ pizza ,isList}) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch=useDispatch()
  const itemQuantity=useSelector(getItemQuantityById(id));
  const isInCart=itemQuantity>0;
  function AddItemToCart(){
    const newItem={
      pizzaId:id,
      name,
      quantity:1,
      unitPrice,
      totalPrice:unitPrice
    };
    dispatch(addItem(newItem))
  }
  return (
    <>
    {
      isList?<li className="flex flex-row gap-4 py-2 hover:bg-stone-50 px-2 rounded">
      <img src={imageUrl} alt={name} className={`w-24 rounded ${soldOut && 'grayscale opacity-50'}`}/>
      <div className="flex flex-col flex-grow">
        <p className="pt-2 font-semibold tracking-widest">{name}</p>
        <p className="text-sm text-slate-500 italic capitalize font-light pt-1">{ingredients.join(", ")}</p>
        <div className="flex flex-row justify-between mt-auto items-center">
          {
              soldOut ?
              <p className="font-semibold uppercase text-xs text-red-500">Sold out</p>:
              <p className="font-semibold text-xs text-green-600">{formatCurrency(unitPrice)}</p>
          }
          {isInCart && <div className="flex items-center gap-3">
          <UpdateItemQuantity pizzaId={id} currQuantity={itemQuantity}/>
            <DeleteItem pizzaId={id}/>
          </div>}
          {!soldOut && !isInCart && <Button disabled={soldOut} type={'small'} onClick={AddItemToCart}>Add To Cart</Button>}
        </div>
      </div>
    </li>:<li className=" bg-yellow-50">
      <img src={imageUrl} alt={name} className="w-full rounded" />
      <div className=" text-center">
        <h4>{name}</h4>
        <p className="bg-yellow-100 p-1 m-2 rounded">
          {ingredients.join(", ")}
        </p>
        <label className="text-green-800 font-semibold">
          {formatCurrency(unitPrice)}
        </label>
      </div>
    </li>

    }
    </>
  );
}

export default MenuItem;
