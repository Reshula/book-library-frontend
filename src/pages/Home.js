import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './BookList';


const Home = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('https://book-library-ddbn.onrender.com/api/books');
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };
        fetchBooks();
    }, []);

    return (
        <div>
            <BookList books={books} />
        </div>
    );
};

export default Home;
