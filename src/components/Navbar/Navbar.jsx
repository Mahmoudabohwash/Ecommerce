import Logo from "./logo/logo";
import Navigation from "./Navigation/Navigation";
import Search from "./Search/Search";
import "./Navbar.css";

function Header({ search, setSearch , cart}) {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <Search search={search} setSearch={setSearch}  cart={cart}/>
    </header>
  );
}
export default Header;
