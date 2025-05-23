function BookCard({ title, author, description, genre, type, imageUrl, onDelete }) {
    return (
      <li>
        {imageUrl && (
          <div>
            <img
              src={imageUrl}
              alt={`Omslag for ${title}`}
              style={{ maxWidth: "150px", marginBottom: "0.5rem" }}
            />
          </div>
        )}
        <h3>{title}</h3>
        <p><strong>Av:</strong> {author}</p>
        {genre && <p><strong>Sjanger:</strong> {genre}</p>}
        {type && <p><strong>Type:</strong> {type}</p>}
        {description && <p><strong>Beskrivelse:</strong> {description}</p>}
        <button onClick={onDelete}>🗑️ Slett</button>
      </li>
    );
  }
  
  export default BookCard;
  