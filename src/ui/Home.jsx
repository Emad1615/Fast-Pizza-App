import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const {username}=useSelector(store=>store.user)

  return (
    <div className="text-center my-10 sm:my-16">
      <p className=" uppercase font-extrabold text-center text-sm md:text-3xl">
        The best pizza.
        < br />
        Straight out of the oven, straight to you.
      </p>
      <h1 className="text-9xl p-5">🍕</h1>
      {
        !username?<CreateUser/>:<Button to={"/menu"} type={"primary"}>Continue Ordering,&nbsp;{username}</Button>
      }
      
    </div>
  );
}

export default Home;
