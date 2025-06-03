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
      setError("Tittel og forfatter må fylles inn...");
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
        <p className="add-book__message">Du må være logget inn for å legge til en bok.</p>
      </div>
    );
  }

  return (
    <div className="add-book">
      <h1 className="add-book__heading">Legg til bok</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="title">Tittel:</label>
          <input
            type="text"
            id="title"
            className="form__input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form__group">
          <label htmlFor="author">Forfatter:</label>
          <input
            type="text"
            id="author"
            className="form__input"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="form__group">
          <label htmlFor="description">Beskrivelse:</label>
          <textarea
            id="description"
            className="form__textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form__group">
          <label htmlFor="genre">Sjanger:</label>
          <input
            type="text"
            id="genre"
            className="form__input"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>

        <div className="form__group">
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            className="form__input"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        <div className="form__group">
          <label htmlFor="imageUrl">Bilde-URL:</label>
          <input
            type="text"
            id="imageUrl"
            className="form__input"
            placeholder="https://..."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        {error && <p className="form__error">{error}</p>}

        <button type="submit">Legg til bok</button>
      </form>
    </div>
  );
}

export default AddBook;
