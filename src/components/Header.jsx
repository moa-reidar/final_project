import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/books">Book List</Link></li>
          <li><Link to="/add-book">Add Book</Link></li>
          <li><Link to="/search">Søk i bokdatabase</Link></li>
          <li>
            <button onClick={handleLogout}>🚪 Logg ut</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
