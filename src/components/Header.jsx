import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const storedLogin = localStorage.getItem("isLoggedIn");
      setIsLoggedIn(storedLogin === "true");
    };

    checkLogin();
    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("storage")); 
    navigate("/login");
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <Link to="/" className="header__link">🏠 Home</Link>
          </li>

          {!isLoggedIn && (
            <li className="header__item">
              <Link to="/login" className="header__link">🔐 Logg inn</Link>
            </li>
          )}

          {isLoggedIn && (
            <>
              <li className="header__item">
                <Link to="/books" className="header__link">📚 Bokliste</Link>
              </li>
              <li className="header__item">
                <Link to="/add-book" className="header__link">➕ Legg til bok</Link>
              </li>
              <li className="header__item">
                <Link to="/search" className="header__link">🔍 Søk i API</Link>
              </li>
              <li className="header__item">
                <button onClick={handleLogout} className="header__logout-button">
                  🚪 Logg ut
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
