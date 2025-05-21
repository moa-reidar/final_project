function BookCard({ title, author, onDelete }) {
    return (
      <li>
        {title} av {author}
        <button onClick={onDelete}>🗑️ Slett</button>
      </li>
    );
  }
  
  export default BookCard;
  