import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { MdBorderColor } from "react-icons/md";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";

function Cart() {
  return (
    <div className="p-1">
      <LinkButton to={"/menu"}>
        <TiArrowBack className="inline-block" /> Back To Menu
      </LinkButton>
      <p className="text-center">Your cart, %NAME%</p>
      <Button to={"/order/new"}><MdBorderColor className="inline-block" /> Order Pizzas</Button>
      <button>
        Clear cart
      </button>
    </div>
  );
}

export default Cart;
