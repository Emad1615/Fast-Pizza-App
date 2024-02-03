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
      <FaSearch className="absolute search top-2" />
      <input
        className="w-3/6 p-1 rounded bg-yellow-50"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.currentTarget.value);
        }}
      />
    </form>
  );
}

export default SearchQuery;
