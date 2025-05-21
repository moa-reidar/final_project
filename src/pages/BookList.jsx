import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

function BookList() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  const handleDelete = (indexToRemove) => {
    const updatedBooks = books.filter((_, index) => index !== indexToRemove);
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
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
        <ul>
          {books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
