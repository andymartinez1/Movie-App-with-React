import Logo from "./Logo";
import Numresults from "./NumResults";
import Search from "./Search";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <Numresults />
    </nav>
  );
}

export default NavBar;
