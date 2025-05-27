import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="home__heading">Velkommen til Book Library App 📚</h1>

      <p className="home__description">
        Dette er din personlige digitale bokhylle. Du kan:
      </p>
      <ul className="home__features">
        <li>🔐 Logge inn for å sikre din personlige bokliste</li>
        <li>➕ Legge til bøker du vil huske</li>
        <li>📖 Bla gjennom eller søke i samlingen din</li>
        <li>🌐 Utforske nye bøker via Open Library API</li>
      </ul>

      <nav className="home__nav">
        <h2 className="home__nav-heading">Navigasjon</h2>
        <ul className="home__links">
          <li>
            <Link to="/login" className="home__link">🔐 Logg inn</Link>
          </li>
          <li>
            <Link to="/add-book" className="home__link">➕ Legg til bok</Link>
          </li>
          <li>
            <Link to="/books" className="home__link">📖 Se bokliste</Link>
          </li>
          <li>
            <Link to="/search" className="home__link">🔍 Søk etter bøker</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
