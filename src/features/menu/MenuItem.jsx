import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helper";
import Button from './../../ui/Button'
import { addItem, decreaseItemQuantity, increaseItemQuantity } from "../cart/cartSlice";
import {  useSelector} from "react-redux";
function MenuItem({ pizza ,isList}) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch=useDispatch();
  const {cart}=useSelector(store=>store.cart)
  const isSelected=cart.findIndex(item=>item.pizzaId===id);
  console.log(cart)
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
          {!soldOut? <>
          {
            isSelected? <Button disabled={soldOut} type={'small'} onClick={AddItemToCart}>Add To Cart</Button>:
            <>
                <div className="flex flex-row gap-3 justify-center items-center">
                    <button className="bg-yellow-500 py-1 px-[10px] rounded-full" onClick={()=>{dispatch(decreaseItemQuantity(id))}}>-</button>
                      <span>{cart.find(item=>item.pizzaId===id).quantity}</span>
                    <button className="bg-yellow-500 py-1 px-[10px] rounded-full" onClick={()=>{dispatch(increaseItemQuantity(id))}}>+</button>
                </div>
            </>
          }
          </>:null}
          {/* <Button disabled={soldOut} type={'small'} onClick={AddItemToCart}>Add To Cart</Button> */}
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
