function BookCard({ title, author, description, genre, type, onDelete }) {
    return (
      <li>
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
  