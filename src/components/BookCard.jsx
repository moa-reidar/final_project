function BookCard({ title, author, description, genre, type, imageUrl, onDelete }) {
  return (
    <li className="book-card">
      {imageUrl && (
        <div className="book-card__image-wrapper">
          <img
            src={imageUrl}
            alt={`Omslag for ${title}`}
            className="book-card__image"
          />
        </div>
      )}

      <div className="book-card__content">
        <h3 className="book-card__title">{title}</h3>

        <p className="book-card__info">
          <strong>Av:</strong> {author}
        </p>

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
