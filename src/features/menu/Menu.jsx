import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  const pizzas = useLoaderData();
  console.log(pizzas);
  return (
    <div>
      <p className="bg-yellow-100 p-2 text-center font-semibold uppercase text-xl">
        Offer buy <strong className="text-red-500">1</strong> get{" "}
        <strong className="text-red-500">3</strong>
      </p>
      <ul className="grid  xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1  gap-6 p-5  ">
        {pizzas.map((pizza, idx) => (
          <MenuItem pizza={pizza} key={idx} />
        ))}
      </ul>
    </div>
  );
}
export async function loader() {
  const data = await getMenu();
  return data;
}
export default Menu;
