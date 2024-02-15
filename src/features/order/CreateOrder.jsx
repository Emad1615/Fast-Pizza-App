import { Form, redirect, useActionData, useNavigation } from "react-router-dom"
import { createOrder } from "../../services/apiRestaurant";
const fakeCart = [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 6,
      name: "Vegetale",
      quantity: 1,
      unitPrice: 13,
      totalPrice: 13,
    },
    {
      pizzaId: 11,
      name: "Spinach and Mushroom",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ];
var isValidPhone =(number)=> /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(number); 
function CreateOrder() {
    const cart=fakeCart
    const error=useActionData();
    const Navigation = useNavigation();
    const isSubmitting = Navigation.state === "submitting";
    return (
        <div>
            <h3 className="text-2xl font-semibold text-center mt-5 text-yellow-700">Ready to order ?<br/> Let's go 🍕</h3>
            <Form method="POST" className="lg:w-1/2 sm:w-full m-auto ">
                <div className="m-3">
                    {/* <label className="block ">FullName</label> */}
                    <input type="text" name="customer" placeholder="Fullname" 
                         className="w-full px-3 py-2 bg-transparent border-b focus:outline-none focus:border-b-yellow-500 transition-colors duration-300 placeholder:text-sm placeholder:font-semibold focus:placeholder:text-[0px]"
                         required/>
                </div>
                <div  className="m-3">
                    <label className="block ">Phone No.</label>
                    <input type="tel" name="phone" placeholder="Phone Number" className="p-2 bg-yellow-50 rounded w-full" required/>
                    {error?.phone && <p className="text-red-500 font-mono">{error.phone}</p>}
                </div>
                <div className="m-3">
                    <label className="block ">Address</label>
                    <input type="text" name="address" placeholder="Address" className="p-2 bg-yellow-50 rounded w-full" required/>
                </div>
                <div className="flex items-center m-3 ">
                    <input  id="red-checkbox" type="checkbox" className="w-6 h-6 inline-block border-2  accent-yellow-500 focus:outline-none focus:ring focus:ring-yellow-400    focus:ring-offset-2 focus:ring-opacity-50 
                     checked:ring checked:ring-yellow-400 checked:ring-offset-2 checked:ring-opacity-50 " name="priority" />
                    <label htmlFor="red-checkbox" className="ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">Want to yo give your order priority?</label>
                </div>
                <div className="text-center">
                    <input type="hidden" name="cart" value={JSON.stringify(cart)}/>
                    <button disabled={isSubmitting}  type="submit" className="bg-yellow-400 py-2 px-3 inline-block rounded-full font-semibold text-stone-600 mx-2 hover:bg-yellow-300 tracking-wider uppercase  transition-all duration-300 focus:outline-none
                 focus:ring focus:ring-yellow-200 focus:ring-offset-2 disabled:cursor-not-allowed hover:shadow-lg ">
                       {isSubmitting?"Placing order....":"Order now"} 
                    </button>
                </div>
            </Form>
        </div>
    )
}
export async function action({request}){
    const formData=await request.formData();
    const data=Object.fromEntries(formData)
    const order={...data,cart:JSON.parse(data.cart),priority:data.priority==="on"?true:false}
    const error={};
    if(!isValidPhone(order.phone))  error.phone="please give us your correct phone number we might need it  to contact you.";
    if(Object.keys(error).length>0) return error
    const newOrder=await createOrder(order);
    return redirect(`/order/${newOrder.id}`)
}

export default CreateOrder
