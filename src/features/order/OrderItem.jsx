import { formatCurrency } from "../../utils/helper"

function OrderItem({item, ingredients,isLoadingIngredients}) {
    const {pizzaId,name,quantity,totalPrice,unitPrice}=item
    return (
        <li className="space-y-2 p-2">
          <div className="flex justify-between items-center ">
            <p className="tracking-widest"><strong>{quantity}</strong>x {name}</p>
            <p className="font-semibold">{formatCurrency(totalPrice)}</p>
          </div>
          {
            isLoadingIngredients?"Loading....": <p className="text-[12px] uppercase italic text-stone-500">{ingredients.join(', ')}</p>
          }
        </li>
      
    )
}

export default OrderItem
