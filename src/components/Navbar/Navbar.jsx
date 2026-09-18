import Logo from "./logo/logo";
import Navigation from "./Navigation/Navigation";
import Search from "./Search/Search";
import "./Navbar.css";

function Header({ search, setSearch }) {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <Search search={search} setSearch={setSearch} />
    </header>
  );
}
export default Header;
