import { useState, useEffect } from "react";

function AddBook() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [type, setType] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

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

    const newBook = { title, author, description, genre, type };
    const storedBooks = localStorage.getItem("books");
    const parsedBooks = storedBooks ? JSON.parse(storedBooks) : [];

    const updatedBooks = [...parsedBooks, newBook];
    localStorage.setItem("books", JSON.stringify(updatedBooks));

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

        <div>
          <label htmlFor="description">Beskrivelse:</label>
          <textarea
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="genre">Sjanger:</label>
          <input
            type="text"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
           />    
        </div>
        
        <div>
         <label htmlFor="type">Type (roman, novelle, biografi, osv.):</label>
         <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="imageUrl">Bilde-URL (forside):</label>
          <input
            type="text"
            id="imageUrl"
            placeholder="https://..."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Legg til bok</button>
      </form>
    </div>
  );
}

export default AddBook;

