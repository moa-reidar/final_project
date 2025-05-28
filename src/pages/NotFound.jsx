import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__heading">404 - Siden ble ikke funnet</h1>
      <p className="not-found__text">
        Siden du prøvde å åpne eksisterer ikke.
      </p>
      <Link to="/" className="not-found__link">Gå til forsiden</Link>
    </div>
  );
}

export default NotFound;
