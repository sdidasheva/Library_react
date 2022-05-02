import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import '../components/styles/addauthor.css'

function AddAuthor({ handleAddAuthor, handleAddAuthorChange }) {
    return (
        <>
            <div className="add_title">Добавить автора</div>
            <form className="add_form">
                <div className="add_inputs">
                    <div>
                        <input
                            className="add_input"
                            type="text"
                            required="required"
                            placeholder="Ссылка на картинку..."
                            name="img"
                            onChange={handleAddAuthorChange} />
                    </div>
                    <div>
                        <input
                            className="add_input"
                            type="text"
                            required="required"
                            placeholder="Имя автора..."
                            name="name"
                            onChange={handleAddAuthorChange} />
                    </div>
                    <div>
                        <input
                            className="add_input"
                            type="text"
                            required="required"
                            placeholder="Год рождения..."
                            name="birth"
                            onChange={handleAddAuthorChange} />
                    </div>
                    <button className="btn_add" type="submit" onClick={handleAddAuthor}><FontAwesomeIcon icon={faAdd} /></button>
                </div>
            </form>

        </>
    )
}

export default AddAuthor;