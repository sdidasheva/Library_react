import React from "react";
import '../components/styles/bookcard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function BookCard({ book, handleDelete, handleEdit }) {
    return (
        <div className="book">
            <img className="book_image" src={book.image} alt="book" />
            <div className="book_info">
                <p className="book_title">{book.title}</p>
                <p className="book_year">{book.year}</p>
                <p className="book_author">{book.author}</p>
            </div>
            <div className="book_btns">
                <button className="btn_delete" onClick={() => handleDelete(book.id)}><FontAwesomeIcon icon={faTrash} /></button>
                <button className="btn_edit" onClick={(event) => handleEdit(event, book)}><FontAwesomeIcon icon={faEdit} /></button>
            </div>
        </div>
    )
}
export default BookCard;