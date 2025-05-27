import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !author) {
      setError("Alle felt må fylles ut.");
      return;
    }

    const newBook = { title, author, description, genre, type, imageUrl };

    try {
      await addDoc(collection(db, "books"), newBook);
      setTitle("");
      setAuthor("");
      setDescription("");
      setGenre("");
      setType("");
      setImageUrl("");
      setError("");
    } catch (err) {
      console.error("Feil ved lagring:", err);
      setError("Kunne ikke lagre bok. Prøv igjen.");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="add-book__access-denied">
        <h1 className="add-book__title">Ingen tilgang</h1>
        <p className="add-book__message">
          Du må være logget inn for å legge til en bok.
        </p>
      </div>
    );
  }

  return (
    <div className="add-book">
      <h1 className="add-book__heading">Legg til bok</h1>
      <form className="add-book__form" onSubmit={handleSubmit}>
        <div className="add-book__field">
          <label htmlFor="title" className="add-book__label">Tittel:</label>
          <input
            type="text"
            id="title"
            className="add-book__input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="add-book__field">
          <label htmlFor="author" className="add-book__label">Forfatter:</label>
          <input
            type="text"
            id="author"
            className="add-book__input"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="add-book__field">
          <label htmlFor="description" className="add-book__label">Beskrivelse:</label>
          <textarea
            id="description"
            className="add-book__textarea"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="add-book__field">
          <label htmlFor="genre" className="add-book__label">Sjanger:</label>
          <input
            type="text"
            id="genre"
            className="add-book__input"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>

        <div className="add-book__field">
          <label htmlFor="type" className="add-book__label">Type:</label>
          <input
            type="text"
            id="type"
            className="add-book__input"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        <div className="add-book__field">
          <label htmlFor="imageUrl" className="add-book__label">Bilde-URL:</label>
          <input
            type="text"
            id="imageUrl"
            className="add-book__input"
            placeholder="https://..."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        {error && <p className="add-book__error">{error}</p>}

        <button type="submit" className="add-book__submit">Legg til bok</button>
      </form>
    </div>
  );
}

export default AddBook;
