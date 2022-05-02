import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";
import '../components/styles/editablebook.css'

function EditableBookCard({ editBook, handleEditBookChange, handleEditBook, handleCancel }) {
    return (
        <div className="book">
            <textarea
                className="edit_input edit_image"
                required="required"
                placeholder="Ссылка на картинку..."
                name="image"
                value={editBook.image}
                onChange={handleEditBookChange} />
            <div className="book_info">
                <input
                    className="edit_input"
                    type="text"
                    required="required"
                    placeholder="Название книги..."
                    name="title"
                    value={editBook.title}
                    onChange={handleEditBookChange} />
                <input
                    className="edit_input"
                    type="text"
                    required="required"
                    placeholder="Год выпуска..."
                    name="year"
                    value={editBook.year}
                    onChange={handleEditBookChange} />
                <input
                    className="edit_input"
                    type="text"
                    required="required"
                    placeholder="Автор книги..."
                    name="author"
                    value={editBook.author}
                    onChange={handleEditBookChange} />
            </div>
            <div className="book_btns">
                <button><FontAwesomeIcon icon={faSave} onClick={handleEditBook} /></button>
                <button ><FontAwesomeIcon icon={faTimes} onClick={handleCancel} /></button>
            </div>
        </div>
    )
}

export default EditableBookCard