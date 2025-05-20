function BookList() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

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
      <ul>
        <li>Harry Potter</li>
        <li>Lord of the Rings</li>
        <li>The Hobbit</li>
      </ul>
    </div>
  );
}

export default BookList;
