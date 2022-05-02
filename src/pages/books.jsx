import React, { useEffect, useState } from "react";
import axios from "axios";
import '../pages/books.css';
import { nanoid } from "nanoid";
import AddBook from "../components/addbook";
import EditableBookCard from "../components/editablebook";
import BookCard from "../components/bookcard";

function Books() {
    const [books, setBooks] = useState([]);
    const [addBook, setAddBook] = useState({
        image: "",
        title: "",
        year: "",
        author: ""
    });
    const [editBook, setEditBook] = useState({
        image: "",
        title: "",
        year: "",
        author: ""
    });

    const [editBookId, setEditBookId] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:3006/books')
            .then(res => {
                console.log(res.data)
                setBooks(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3006/books/${id}`);
            const newBooks = books.filter((book) => {
                return book.id !== id;
            });
            setBooks(newBooks);
        } catch (err) {
            console.log(err);
        }
    }

    // Add Book
    const handleAddBookChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newBookData = { ...addBook };
        newBookData[fieldName] = fieldValue;

        setAddBook(newBookData)
    }

    const handleAddBook = async (event) => {
        event.preventDefault();
        const newBook = {
            id: nanoid(),
            image: addBook.image,
            title: addBook.title,
            year: addBook.year,
            author: addBook.author
        }
        try {
            const res = await axios.post('http://localhost:3006/books', newBook);
            const newBooks = [...books, newBook];
            setBooks(newBooks);
        } catch (err) {
            console.log(err)
        }
    }

    // Edit Book
    const handleEditBookChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newBookData = { ...editBook };
        newBookData[fieldName] = fieldValue;

        setEditBook(newBookData)
    }

    const handleEditBook = async (event) => {
        event.preventDefault();
        const editedBook = {
            id: nanoid(),
            image: editBook.image,
            title: editBook.title,
            year: editBook.year,
            author: editBook.author
        };
        try {
            const res = axios.patch(`http://localhost:3006/books/${editBookId}`, editedBook);
            const newBooks = [...books];
            const index = books.findIndex((book) => book.id === editBookId);
            newBooks[index] = editedBook;
            setBooks(newBooks);
            setEditBookId(null)
        } catch (err) {
            console.log(err)
        }
    };

    const handleCancel = () => {
        setEditBookId(null)
    }

    const handleEdit = (event, book) => {
        event.preventDefault();
        setEditBookId(book.id);
        const formValues = {
            image: book.image,
            title: book.title,
            year: book.year,
            author: book.author
        }
        setEditBook(formValues)
    };

    return (
        <>
            <AddBook handleAddBookChange={handleAddBookChange} handleAddBook={handleAddBook} />
            <div className="books">
                {books.map((book, index) => (
                    <>
                        {editBookId === book.id ? (<EditableBookCard key={index} editBook={editBook} handleEditBookChange={handleEditBookChange} handleEditBook={handleEditBook} handleCancel={handleCancel} />) : <BookCard book={book} handleDelete={handleDelete} handleEdit={handleEdit} />}
                    </>
                ))}
            </div>
        </>
    )
}

export default Books
