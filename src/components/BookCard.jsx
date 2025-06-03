import fallbackImage from "../assets/img/fallback.png";

function BookCard({ title, author, description, genre, type, imageUrl, onDelete }) {
  return (
    <li className="book-card">
      <div className="book-card__content">
        <h3 className="book-card__title">{title}</h3>

        <div className="book-card__image-wrapper">
          <img
            src={imageUrl || fallbackImage}
            alt={`Omslag for ${title}`}
            className={`book-card__image ${!imageUrl ? "fallback" : ""}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallbackImage;
              e.target.classList.add("fallback");
            }}
          />
        </div>

        <p className="book-card__info"><strong>Av:</strong> {author}</p>

        {genre && (
          <p className="book-card__info">
            <strong>Sjanger:</strong> {genre}
          </p>
        )}

        {type && (
          <p className="book-card__info">
            <strong>Type:</strong> {type}
          </p>
        )}

        {description && (
          <p className="book-card__info">
            <strong>Beskrivelse:</strong> {description}
          </p>
        )}

        <button className="book-card__delete-button" onClick={onDelete}>
          🗑️ Slett
        </button>
      </div>
    </li>
  );
}

export default BookCard;
