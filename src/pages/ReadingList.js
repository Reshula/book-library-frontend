import { useState, useEffect } from "react";
import axios from "axios";
import  iconTrash from '../Assets/icon-trash.png';
import iconAdd from '../Assets/icon-add-button.png'

const ReadingList = () =>{
    const [readingList,setReadingList] = useState([]);
    const [newBook, setNewBook] = useState({ title: '', author: ''});

    useEffect(() => {
        const fetchReadingList = async () => {
          try {
            const response = await axios.get('https://book-library-ddbn.onrender.com/api/readingList');
            setReadingList(response.data.books || []);
          } catch (error) {
            console.error('Error fetching reading list:', error);
          }
        };
    
        fetchReadingList();
      }, []);

      const handleAddBook = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('https://book-library-ddbn.onrender.com/api/readingList', newBook);
          setReadingList(response.data.books || []);
          setNewBook({ title: '', author: ''});
        } catch (error) {
          console.error('Error adding book:', error);
        }
      };

  const handleDelete = async (bookId) => {
    try {
      await axios.delete(`https://book-library-ddbn.onrender.com/api/readingList/${bookId}`);
      // Обновляем список после удаления
      setReadingList((prevList) => prevList.filter((book) => book._id !== bookId));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

    return(
        <div className="reading-list-container">
            <h2 className="reading-list-title">Your Reading List</h2>

{/* Форма добавления книги */}
<form className="reading-list-form" onSubmit={handleAddBook} >
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          required
        />
  
        <button  disabled={!newBook} type="submit">
          <img src={iconAdd} alt="icon" width="20px"/>
        </button>
      </form>


      {readingList.length === 0 ? (
        <p>You did not crate reading list</p>
      ) : (
        <div className="reading-list">
        {readingList.map((book) => (
          <div key={book._id} className="reading-list-item">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button onClick={() => handleDelete(book._id)}>
              <img src={iconTrash} alt="icon" width="20px"/>
            </button>
          </div>
        ))}
      </div>
    )}
  </div>
  );
};
export default ReadingList;