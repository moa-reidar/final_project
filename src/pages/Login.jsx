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
    } else {
      setError("Feil brukernavn eller passord.");
      setIsLoggedIn(false);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      {isLoggedIn ? (
        <p>Du er logget inn som <strong>{username}</strong></p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Brukernavn:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Passord:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit">Logg inn</button>
        </form>
      )}
    </div>
  );
}

export default Login;
