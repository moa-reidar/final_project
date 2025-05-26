import { useState } from "react";

function SearchBooks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}`
      );
      const data = await response.json();
      setResults(data.docs);
    } catch (err) {
      console.error("Feil ved søk:", err);
    }
  };

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

      <ul>
        {results.slice(0, 10).map((book, index) => (
          <li key={index}>
            <strong>{book.title}</strong> {book.author_name && <>av {book.author_name.join(", ")}</>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBooks;
