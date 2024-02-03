import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helper";

function Order() {
  const data = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = data;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  return (
    <div className="m-4">
      <blockquote className="border-l-8 p-5 border-l-yellow-600 w-3/6 m-auto bg-yellow-50">
        <h3 className="text-center font-extrabold text-xl text-slate-500">
          Invoice
        </h3>
        <h4>Priority: {priority ? " ✅" : " ❌"} </h4>
        <h4>Status: {status} order</h4>
        <h4>Estimated time: {formatDate(estimatedDelivery)} </h4>
        <h4>Order price: {formatCurrency(orderPrice)} </h4>
        {priority && (
          <h4>
            Priority Price:{" "}
            <code className="text-red-500">
              {formatCurrency(priorityPrice)}
            </code>
          </h4>
        )}
        <h4>
          To pay on delivery:
          <code className="text-red-500">
            {formatCurrency(orderPrice + priorityPrice)}
          </code>
        </h4>
        <h4>
          {deliveryIn > 0 ? (
            `${calcMinutesLeft(estimatedDelivery)} minutes left`
          ) : (
            <strong className="text-green-600 block text-center ">
              Order should have arrived 🍴
            </strong>
          )}
        </h4>
      </blockquote>
    </div>
  );
}
export async function loader({ request, params }) {
  const data = await getOrder(params.orderId);
  return data;
}
export default Order;
