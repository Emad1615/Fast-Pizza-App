import { formatCurrency } from "../../utils/helper"

function OrderItem({item}) {
    const {pizzaId,name,quantity,totalPrice,unitPrice}=item
    return (
        <li className="flex justify-between items-center py-4 px-2">
            <p className="tracking-widest"><strong>{quantity}</strong>x {name}</p>
            <p className="font-semibold">{formatCurrency(totalPrice)}</p>
        </li>
    )
}

export default OrderItem
