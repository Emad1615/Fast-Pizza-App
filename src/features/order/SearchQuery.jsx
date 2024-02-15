import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function SearchQuery() {
  const {orderId}=useParams()
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function HandleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
  }
  useEffect(()=>{
    if(orderId)
       setQuery(orderId)
  },[orderId])
  return (
    <form onSubmit={HandleSubmit} className="relative">
      {/* <FaSearch className="absolute search top-2" /> */}
      <input
        className="w-32 sm:w-56 bg-yellow-50 px-3 py-2 rounded-full focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-opacity-30 focus:ring-offset-1 focus:shadow sm:focus:w-96 transition-all duration-300 placeholder:text-stone-300 focus:scale-105"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.currentTarget.value);
        }}
        placeholder="Search order"
      />
    </form>
  );
}

export default SearchQuery;
