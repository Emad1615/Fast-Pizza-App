import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
  <div className="py-4 px-3">
    <LinkButton to={"/menu"}>Back To Menu</LinkButton>
    <p className="font-semibold mt-5">There no items selected to your cart  back to menu and select your fav Pizza :(</p>
  </div>
  );
 
}

export default EmptyCart;
