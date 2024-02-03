import { formatCurrency } from "../../utils/helper";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  return (
    <li className=" bg-yellow-50">
      <img src={imageUrl} alt={name} className="w-full rounded" />
      <div className=" text-center">
        <h4>{name}</h4>
        <p className="bg-yellow-100 p-1 m-2 rounded">
          {ingredients.join(", ")}
        </p>
        <label className="text-green-800 font-semibold">
          {formatCurrency(unitPrice)}
        </label>
      </div>
    </li>
  );
}

export default MenuItem;
