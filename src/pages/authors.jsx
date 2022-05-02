import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorCard from "../components/authorcard";
import "../pages/authors.css"
import AddAuthor from "../components/addauthor";
import { nanoid } from "nanoid";

function Authors() {
    const [authors, setAuthors] = useState([]);
    const [addAuthor, setAddAuthor] = useState({
        img: "",
        name: "",
        birth: ""
    });

    useEffect(() => {
        axios.get('http://localhost:3006/authors')
            .then(res => {
                console.log(res.data)
                setAuthors(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3006/authors/${id}`);
            const newAuthors = authors.filter((author) => {
                return author.id !== id;
            });
            setAuthors(newAuthors);
        } catch (err) {
            console.log(err);
        }
    }

    // Add Author
    const handleAddAuthorChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newAuthorData = { ...addAuthor };
        newAuthorData[fieldName] = fieldValue;

        setAddAuthor(newAuthorData)
    }

    const handleAddAuthor = async (event) => {
        event.preventDefault();
        const newAuthor = {
            id: nanoid(),
            img: addAuthor.img,
            name: addAuthor.name,
            birth: addAuthor.birth
        }

        const res = await axios.post('http://localhost:3006/authors', newAuthor);
        const newAuthors = [...authors, newAuthor];
        setAuthors(newAuthors)

    }


    return (
        <>
            <AddAuthor handleAddAuthorChange={handleAddAuthorChange} handleAddAuthor={handleAddAuthor} />
            <div className="authors">
                {authors.map((author, index) => {
                    return (
                        <div className="author_item" key={index}><AuthorCard author={author} handleDelete={handleDelete} /></div>
                    )
                })}
            </div>
        </>
    )
}

export default Authors