import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({pizzaId,currQuantity}) {
    const dispatch=useDispatch();
    return (
        <div className="flex gap-2 justify-center items-center">
            <Button type={"round"} onClick={()=>dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
            <span>{currQuantity}</span>
            <Button type={"round"} onClick={()=>dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity