import bookLogo from "../assets/icons/book-logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__section">
          <h3 className="footer__title">🔗 Nyttige lenker</h3>
          <p>
            <a href="https://openlibrary.org/" target="_blank" rel="noopener noreferrer">
              Open Library API
            </a>
          </p>
          <p>
            <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
              Firebase
            </a>
          </p>
          <p>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>

        <div className="footer__logo-wrapper">
          <img
            src={bookLogo}
            alt="Bokikon"
            className="footer__logo"
          />
        </div>

        <div className="footer__section">
          <h3 className="footer__title">📬 Kontakt</h3>
          <p>Utviklet av Moa reidar</p>
          <p>E-post: dennis@example.com</p>
        </div>

      </div>

      <div className="footer__bottom">
        &copy; 2025 Moa reidar · Alle rettigheter forbeholdt
      </div>
    </footer>
  );
}

export default Footer;
