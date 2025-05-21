import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Velkommen til Book Library App 📚</h1>
      <p>Her kan du logge inn, legge til bøker og se boklisten din.</p>

      <nav>
        <ul>
          <li>
            <Link to="/login">🔐 Logg inn</Link>
          </li>
          <li>
            <Link to="/add-book">➕ Legg til bok</Link>
          </li>
          <li>
            <Link to="/books">📖 Se bokliste</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
