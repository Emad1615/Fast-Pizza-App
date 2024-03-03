import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helper";
import OrderItem from "./OrderItem";

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
    <div className="my-5 mx-10 ">
        <h3 className="text-center font-extrabold text-xl text-slate-600 uppercase tracking-widest">
          Order details
        </h3>
        <div className="m-4 space-y-6">

        <div className="flex justify-between items-center gap-3 flex-wrap">
          <h3 className="text-xl font-extrabold uppercase">Order <strong className="text-green-600 px-2 underline">#{id}</strong> Status</h3>
          <div className="space-x-4">
             {priority ? <span className="text-red-50 bg-red-500 rounded-full px-4 py-2 uppercase text-sm">priority</span> : null}
            <span className="text-green-50 bg-green-500 rounded-full px-4 py-2 text-sm uppercase">{status}</span>
          </div>
        </div>

      <div className="flex justify-between items-center flex-wrap bg-stone-200  py-4 px-2 rounded-lg">
        <p className="font-semibold tracking-widest">
          {
            deliveryIn>0? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left`:"Order should have arrived"
          }
        </p>
         <p className="font-normal tracking-widest">Estimated time: {formatDate(estimatedDelivery)}</p>
      </div>
      <ul className="divide-y divide-stone-200">
          {
            cart.map((item,idx)=><OrderItem key={idx} item={item}/>)
          }
      </ul>
     
      <div className="space-y-3 bg-stone-200  py-4 px-2 rounded-lg ">
        <h4>Order price: <code className=" font-semibold">{formatCurrency(orderPrice)}</code> </h4>
          {priority && (
            <h4>
              Priority Price:{" "}
              <code className=" font-semibold">
                {formatCurrency(priorityPrice)}
              </code>
            </h4>
          )}
          <h4>
            To pay on delivery:
            <code className=" font-semibold">
              {formatCurrency(orderPrice + priorityPrice)}
            </code>
          </h4>
      </div> 

    </div>
    </div>
    
  );
}
export async function loader({ request, params }) {
  const data = await getOrder(params.orderId);
  return data;
}
export default Order;
