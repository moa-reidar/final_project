// React og routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Komponenter
import Header from "./components/Header";
import Footer from "./components/footer";

// Sider
import Home from "./pages/Home";
import Login from "./pages/Login";
import BookList from "./pages/BookList";
import AddBook from "./pages/AddBook";
import SearchBooks from "./pages/SearchBooks";
import NotFound from "./pages/NotFound";

// Global CSS
import "./css/reset.css";
import "./css/variables.css";
import "./css/mediaqueries.css";
import "./css/app.css";

// Komponent-styling
import "./css/header.css";
import "./css/footer.css";
import "./css/bookcard.css";
import "./css/login.css";
import "./css/form.css";

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
