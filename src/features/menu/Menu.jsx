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
      <marquee  direction="down" scrolldelay="350" behavior="alternate" className="bg-slate-50 p-2 text-center font-bold uppercase text-xl tracking-widest leading-10">Your offer belong here </marquee>
      <div className=" py-2 flex justify-center items-center gap-3 ">
          <button onClick={()=>setIsList(true)} className="text-2xl focus:outline-none bg-stone-200 p-2 rounded  font-semibold hover:bg-stone-300 transition-colors duration-300 ease-in" title="List view"><CiBoxList /></button>
          <button onClick={()=>setIsList(false)} className="text-2xl focus:outline-none bg-stone-200 p-2 rounded  font-semibold hover:bg-stone-300 transition-colors duration-300 ease-in" title="Grid view"><CiGrid41 /></button>
      </div>
      {
        isList? <ul className="px-5 py-2 divide-y divide-slate-200 ">
        {pizzas.map((pizza, idx) => (
          <MenuItem pizza={pizza} key={idx} isList={isList}/>
        ))}
          </ul> :
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
