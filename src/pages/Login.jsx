import { useState, useEffect } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    const storedUser = localStorage.getItem("username");

    if (storedLogin === "true" && storedUser) {
      setIsLoggedIn(true);
      setUsername(storedUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
    localStorage.setItem("username", username);
  }, [isLoggedIn, username]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      setError("");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);
      window.dispatchEvent(new Event("storage")); 
    } else {
      setError("Feil brukernavn eller passord.");
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    window.dispatchEvent(new Event("storage")); 
  };

  return (
    <div className="login">
      <h1 className="login__heading">Login</h1>

      {isLoggedIn ? (
        <div className="login__status">
          <p className="login__message">
            ✅ Du er logget inn som <strong>{username}</strong>
          </p>
          <button className="login__logout-button" onClick={handleLogout}>
            Logg ut
          </button>
        </div>
      ) : (
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__field">
            <label htmlFor="username" className="login__label">Brukernavn:</label>
            <input
              type="text"
              id="username"
              className="login__input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="login__field">
            <label htmlFor="password" className="login__label">Passord:</label>
            <input
              type="password"
              id="password"
              className="login__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="login__error">{error}</p>}

          <button type="submit" className="login__submit-button">Logg inn</button>
        </form>
      )}
    </div>
  );
}

export default Login;
