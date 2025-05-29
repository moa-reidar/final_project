import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer"; 
import Home from "./pages/Home";
import Login from "./pages/Login";
import BookList from "./pages/BookList";
import AddBook from "./pages/AddBook";
import SearchBooks from "./pages/SearchBooks";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/search" element={<SearchBooks />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
