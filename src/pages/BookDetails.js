import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import  iconAddToCart from '../Assets/icon-add-to-cart.png';
import ChangeQuantity from '../redux/ChangeQuantity';


const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const dispatch = useDispatch(); 
  const [quantity, setQuantity] = useState(1); // Получаем данные о книге для корзины

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`https://book-library-ddbn.onrender.com/api/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    fetchBook();
  }, [id]);

  const handleAddToCart = () => {
    if (book) {
      dispatch(addToCart(book));  // Добавляем книгу в корзину
    }
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div className="book-details-container">
 
      <div className="book-info">
        <h2>{book.title}</h2>
        <p className="author">{book.author}</p>
        <p className="description">{book.description}</p>
        <p className="description">price ${book.price}</p>

        <button className="add-to-cart-button" onClick={handleAddToCart}>
           <img src={iconAddToCart} alt="icon" width="30px"/>
          
        </button>
      </div>
      <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
    </div>
  );
};

export default BookDetails;
