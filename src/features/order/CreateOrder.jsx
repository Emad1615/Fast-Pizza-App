import { Form, redirect, useActionData, useNavigation } from "react-router-dom"
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
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
                    <input type="text" name="customer" placeholder="Fullname" 
                         className="input"
                         required/>
                </div>
                <div  className="m-3">
                    <input type="tel" name="phone" placeholder="Phone Number" className="input" required/>
                    {error?.phone && <p className="text-red-500 font-mono bg-red-100 my-2 px-2 py-1 font-normal rounded">⚠ {error.phone}</p>}
                </div>
                <div className="m-3">
                    <input type="text" name="address" placeholder="Address" className="input" required/>
                </div>
                <div className="flex items-center m-3 ">
                    <input  id="red-checkbox" type="checkbox" className="w-6 h-6 inline-block   accent-yellow-500 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 focus:ring-opacity-50 
                     checked:ring checked:ring-yellow-400 checked:ring-offset-2 checked:ring-opacity-50 " name="priority" />
                    <label htmlFor="red-checkbox" className="ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">Want to yo give your order priority?</label>
                </div>
                <div className="text-center">
                    <input type="hidden" name="cart" value={JSON.stringify(cart)}/>
                    <Button disabled={isSubmitting} type={"primary"}>
                        {isSubmitting?"Placing order....":"Order now"}
                    </Button>
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
