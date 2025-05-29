function Footer() {
    return (
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__section footer__about">
            <h3 className="footer__title">📚 Book Library App</h3>
            <p className="footer__description">
              Dette er en enkel og pedagogisk applikasjon laget for å lære React,
              Firebase og API-integrasjon. Her kan du søke etter bøker, lagre dine egne
              og hente data fra Open Library.
            </p>
          </div>
  
          <div className="footer__section footer__links">
            <h4 className="footer__subtitle">🔗 Nyttige lenker</h4>
            <ul className="footer__list">
              <li><a href="https://openlibrary.org/" target="_blank" rel="noopener noreferrer" className="footer__link">Open Library API</a></li>
              <li><a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" className="footer__link">Firebase</a></li>
              <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="footer__link">GitHub</a></li>
            </ul>
          </div>
  
          <div className="footer__section footer__contact">
            <h4 className="footer__subtitle">📬 Kontakt</h4>
            <p className="footer__text">Utviklet av Moa reidar</p>
            <p className="footer__text">E-post: dennis@example.com</p>
          </div>
        </div>
  
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2025 Moa reidar · Alle rettigheter forbeholdt
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  