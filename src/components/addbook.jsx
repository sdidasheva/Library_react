import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import '../components/styles/addbook.css'

function AddBook({ handleAddBook, handleAddBookChange }) {
    return (
        <>
            <div className="add_title">Добавить книгу</div>
            <form className="add_form">
                <div className="add_inputs">
                    <div>
                        <input
                            className="add_input"
                            type="text"
                            required="required"
                            placeholder="Ссылка на картинку..."
                            name="image"
                            onChange={handleAddBookChange} />
                    </div>
                    <div>
                        <input
                            className="add_input"
                            type="text"
                            required="required"
                            placeholder="Название книги..."
                            name="title"
                            onChange={handleAddBookChange} />
                    </div>
                    <div>
                        <input
                            className="add_input"
                            type="text"
                            required="required"
                            placeholder="Год выпуска..."
                            name="year"
                            onChange={handleAddBookChange} />
                    </div>
                    <div>
                        <input
                            className="add_input"
                            type="text"
                            required="required"
                            placeholder="Автор книги..."
                            name="author"
                            onChange={handleAddBookChange} />
                    </div>
                    <button className="btn_add" type="submit" onClick={handleAddBook}><FontAwesomeIcon icon={faAdd} /></button>
                </div>
            </form>

        </>
    )
}

export default AddBook;