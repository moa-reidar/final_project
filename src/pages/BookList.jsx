import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../Firebase";
import BookCard from "../components/BookCard";

function BookList() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "books"));
        const bookList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBooks(bookList);
      } catch (err) {
        console.error("Feil ved henting av bøker:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (idToDelete, bookTitle) => {
    const confirmDelete = window.confirm(
      `Er du sikker på at du vil slette "${bookTitle}"?`
    );
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "books", idToDelete));
      setBooks((prevBooks) =>
        prevBooks.filter((book) => book.id !== idToDelete)
      );
      setStatusMessage(`✅ "${bookTitle}" ble slettet`);
    } catch (err) {
      console.error("Feil ved sletting:", err);
      setStatusMessage("❌ Klarte ikke å slette bok");
    } finally {
      setTimeout(() => setStatusMessage(""), 3000);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="book-list__access-denied">
        <h1 className="book-list__title">Ingen tilgang</h1>
        <p className="book-list__message">Du må være logget inn for å se boklisten.</p>
      </div>
    );
  }

  return (
    <div className="book-list">
      <h1 className="book-list__heading">Bokliste</h1>

      {statusMessage && (
        <p className="book-list__status-message">{statusMessage}</p>
      )}

      {loading ? (
        <p className="book-list__loading">Laster bøker...</p>
      ) : books.length === 0 ? (
        <p className="book-list__empty">Ingen bøker funnet.</p>
      ) : (
        <>
          <div className="book-list__search">
            <label htmlFor="search" className="book-list__label">Søk:</label>
            <input
              type="text"
              id="search"
              className="book-list__input"
              placeholder="Søk etter tittel eller forfatter"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <ul className="book-list__items">
            {books
              .filter(
                (book) =>
                  book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  book.author.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((book) => (
                <BookCard
                  key={book.id}
                  title={book.title}
                  author={book.author}
                  description={book.description}
                  genre={book.genre}
                  type={book.type}
                  imageUrl={book.imageUrl}
                  onDelete={() => handleDelete(book.id, book.title)} 
                />
              ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default BookList;
