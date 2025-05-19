import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        <p>✅ Du er logget inn som <strong>{username}</strong></p>
      ) : (
        <form handleSubmit={handleSubmit}> 
          <div>
            <label htmlFor="username">Brukernavn:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          </form>  
      )}
    </div>
  );
}