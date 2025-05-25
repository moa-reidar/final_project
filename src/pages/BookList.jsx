import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";
import { db } from "../Firebase";
import BookCard from "../components/BookCard";

function BookList() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (idToDelete) => {
    try {
      await deleteDoc(doc(db, "books", idToDelete));
      setBooks((prevBooks) =>
        prevBooks.filter((book) => book.id !== idToDelete)
      );
    } catch (err) {
      console.error("Feil ved sletting:", err);
    }
  };

  if (!isLoggedIn) {
    return (
      <div>
        <h1>Ingen tilgang</h1>
        <p>Du må være logget inn for å se boklisten.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Book List</h1>

      {books.length === 0 ? (
        <p>Ingen bøker funnet.</p>
      ) : (
        <>
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
                  onDelete={() => handleDelete(book.id)}
                />
              ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default BookList;
