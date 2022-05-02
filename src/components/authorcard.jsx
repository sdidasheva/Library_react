import React from "react";
import '../components/styles/authorcard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function AuthorCard({ author, handleDelete }) {
    return (
        <div className="author">
            <img className="author_img" src={author.img} alt="author" />
            <div className="author_info">
                <p className="author_name">{author.name}</p>
                <p className="author_birth">{author.birth}</p>
            </div>
            <div className="author_btns">
                <button className="btn_delete" onClick={() => handleDelete(author.id)}><FontAwesomeIcon icon={faTrash} /></button>
                <button className="btn_edit"><FontAwesomeIcon icon={faEdit} /></button>
            </div>
        </div>
    )
}
export default AuthorCard;