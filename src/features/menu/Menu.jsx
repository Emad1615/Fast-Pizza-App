import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { getMenu } from "../../services/apiRestaurant";
import { CiBoxList } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { useState } from "react";

function Menu() {
  const pizzas = useLoaderData();
  const [isList,setIsList]=useState(true)
  return (
    <div>
      <p className="bg-yellow-100 p-2 text-center font-semibold uppercase text-xl">
        Offer buy <strong className="text-red-500">1</strong> get{" "}
        <strong className="text-red-500">3</strong>
      </p>
      <div className=" py-2 flex justify-center items-center gap-3 ">
          <button onClick={()=>setIsList(true)} className="text-2xl focus:outline-none bg-slate-200 p-2 rounded" title="List view"><CiBoxList /></button>
          <button onClick={()=>setIsList(false)} className="text-2xl focus:outline-none bg-slate-200 p-2 rounded" title="Grid view"><CiGrid41 /></button>
      </div>
      {
        isList?<ul className="px-5 py-2 divide-y divide-slate-200">
        {pizzas.map((pizza, idx) => (
          <MenuItem pizza={pizza} key={idx} />
        ))}
        </ul>:
        <ul className="grid  xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1  gap-6 p-5  ">
          {pizzas.map((pizza, idx) => (
            <MenuItem pizza={pizza} key={idx} isList={isList}/>
          ))}
        </ul>
      }
    </div>
  );
}
export async function loader() {
  const data = await getMenu();
  return data;
}
export default Menu;
