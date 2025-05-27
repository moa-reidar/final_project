import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";

function SearchBooks() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}`
      );
      const data = await response.json();
      setResults(data.docs);
    } catch (err) {
      console.error("Feil ved søk:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddBook = async (book) => {
    const newBook = {
      title: book.title,
      author: book.author_name?.[0] || "Ukjent",
      imageUrl: book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : "",
      genre: book.subject?.[0] || "",
      description: "",
      type: "",
    };

    try {
      await addDoc(collection(db, "books"), newBook);
      alert("Bok lagt til i biblioteket!");
    } catch (err) {
      console.error("Kunne ikke lagre bok:", err);
      alert("Feil ved lagring.");
    }
  };

  if (!isLoggedIn) {
    return (
      <div>
        <h1>Ingen tilgang</h1>
        <p>Du må være logget inn for å søke etter bøker.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Søk etter bøker</h1>

      <input
        type="text"
        placeholder="Skriv boktittel eller forfatter"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Søk</button>

      {loading && <p>Laster bøker...</p>}

      <ul>
        {results.slice(0, 10).map((book, index) => (
          <li key={index}>
            <div>
              <strong>{book.title}</strong>
              <br />

              {book.cover_i && (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={`Forside: ${book.title}`}
                />
              )}

              {book.author_name && (
                <p>av {book.author_name.slice(0, 2).join(", ")}</p>
              )}

              {book.subject && (
                <small>Kategori: {book.subject[0]}</small>
              )}

              <div>
                <button onClick={() => handleAddBook(book)}>➕ Legg til</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBooks;
