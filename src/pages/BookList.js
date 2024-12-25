import React from 'react';
import { Link } from 'react-router-dom';
import "./pages.css"

const BookList = ({ books }) => {
    return (
        <div className='container'>
            <h2 className='h2-bookList'>Book List</h2>
            <div className='list'>
                {books.map((book) => (
                    <div className='card' key={book._id}>
                        <Link className='link'to={`/book/${book._id}`}>
                            <h3 className='h3-title' >{book.title}</h3>
                            <p className='p-author'>{book.author}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;
