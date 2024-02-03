import { Link } from "react-router-dom";
import SearchQuery from "../features/order/SearchQuery";

function Header() {
  return (
    <header>
      <ul className="flex flex-row justify-start items-center w-full bg-yellow-500 p-2 flex-wrap">
        <li className="flex-none">
          <Link to="/">🍕 Fast react pizza co.</Link>
        </li>
        <li className="flex-grow text-center">
          <SearchQuery />
        </li>
        <li className="flex-none">
          <strong>Welcome</strong>, Emad Ismail
        </li>
      </ul>
    </header>
  );
}

export default Header;
