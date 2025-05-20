import { useState, useEffect } from "react";

function AddBook() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [books, setBooks] = useState(() => {
    const storedBooks = localStorage.getItem("books");
    return storedBooks ? JSON.parse(storedBooks) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

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
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));

    setTitle("");
    setAuthor("");
    setError("");
  };

  const handleDelete = (indexToRemove) => {
    const updatedBooks = books.filter((book, index) => index !== indexToRemove);
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
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

          <div>
            <label htmlFor="search">Søk:</label>
            <input
              type="text"
              id="search"
              placeholder="Søk etter tittel eller forfatter"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <ul>
            {books
              .filter((book) =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.author.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((book, index) => (
                <li key={index}>
                  {book.title} av {book.author}
                  <button onClick={() => handleDelete(index)}>🗑️ Slett</button>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AddBook;
