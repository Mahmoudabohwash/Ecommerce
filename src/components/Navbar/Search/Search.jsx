import { useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "../../../pages/Cart/Cart";
function Search({ search, setSearch ,cart}) {
  console.log("search", search)
  useEffect(() => {
    console.log("search Changed" , search)
  }, [search])
  return (
    <div className="search-container">
      <search className="search">
        <input
          className="input"
          type="text"
          placeholder="🔍NEXURA..."
          value={search}
          onChange={(x) => setSearch(x.target.value)}
        />
      </search>

      <Link
      to="/Cart"
      >
        < Cart cart={cart} />
      </Link>
    </div>
  );
}
export default Search;
