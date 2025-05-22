function BookCard({ title, author, description, onDelete }) {
    return (
      <li>
        <h3>{title}</h3>
        <p><strong>Av:</strong> {author}</p>
        {description && <p><strong>Beskrivelse:</strong> {description}</p>}
        <button onClick={onDelete}>🗑️ Slett</button>
      </li>
    );
  }
  
  export default BookCard;
  