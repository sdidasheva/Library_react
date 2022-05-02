import React from "react";
import logo from '../images/book_logo.svg'
import '../components/styles/header.css'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
import Books from "../pages/books";
import Authors from "../pages/authors";
function Header() {

    return (
        <Router>
            <header className="header">
                <Link to="/" ><img className="header_logo" src={logo} alt="logo" /></Link>
                <nav>
                    <ul className="header_nav">
                        <li ><Link className="header_items" to="/">Книги</Link></li>
                        <li ><Link className="header_items" to="/authors">Авторы</Link></li>
                    </ul>
                </nav>
            </header>
            <hr className="header_line"></hr>
            <Routes>
                <Route exact path="/" element={<Books />} />
                <Route exact path="/authors" element={<Authors />} />
            </Routes>
        </Router>
    )
}

export default Header;