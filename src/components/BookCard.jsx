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

      <h3 className="book-card__title">{title}</h3>
      <p className="book-card__author">
        <strong>Av:</strong> {author}
      </p>

      {genre && (
        <p className="book-card__genre">
          <strong>Sjanger:</strong> {genre}
        </p>
      )}

      {type && (
        <p className="book-card__type">
          <strong>Type:</strong> {type}
        </p>
      )}

      {description && (
        <p className="book-card__description">
          <strong>Beskrivelse:</strong> {description}
        </p>
      )}

      <button className="book-card__delete-button" onClick={onDelete}>
        🗑️ Slett
      </button>
    </li>
  );
}

export default BookCard;
