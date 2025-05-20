import { useState, useEffect } from "react";

function AddBook() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author) {
      setError("Alle felt må fylles ut.");
      return;
    }

    const newBook = { title, author };
    setBooks((prev) => [...prev, newBook]);
    setTitle("");
    setAuthor("");
    setError("");
  };

  if (!isLoggedIn) {
    return (
      <div>
        <h1>Ingen tilgang</h1>
        <p>Du må være logget inn for å legge til en bok.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Tittel:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="author">Forfatter:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Legg til bok</button>
      </form>

      {books.length > 0 && (
        <div>
          <h2>Lagrede bøker:</h2>
          <ul>
            {books.map((book, index) => (
              <li key={index}>
                {book.title} av {book.author}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AddBook;
