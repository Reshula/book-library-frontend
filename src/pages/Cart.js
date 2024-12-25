import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Для перехода между страницами
import { removeFromCart } from '../redux/cartSlice';
import ContinueShopping from './ContinueShopping';
import icon from '../Assets/icon-trash.png';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // навигации

  // удаления товара из корзины
  const handleRemove = (id) => {
    console.log("Removing item with ID:", id);
    dispatch(removeFromCart(id));
  };

  // Вычисляем общую стоимость товаров в корзине
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Обработчик кнопки "Buy"
  const handleBuy = () => {
    navigate('/payment'); // Перенаправляем пользователя на страницу оплаты
  };

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <div className="cart-empty-container">
          <p className="cart-empty">Your cart is empty</p>
          <ContinueShopping />
        </div>
      ) : (
        <div className="cart-list">
          <h3 className="cart-title">Current Cart Items:</h3>
          {cartItems.map((item) => (
            <div className="cart-item" key={item._id}>
              <p>{item.title} - {item.author}</p>
              <p>{item.quantity} book(s)</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <button className="remove-btn" onClick={() => handleRemove(item._id)}>
                <img src={icon} alt="icon" width="20px" />
              </button>
            </div>
          ))}
          <div className="total-price">
            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
          </div>
          <button className="buy-btn" onClick={handleBuy}>Buy</button> {/* Переход на новую страницу */}
        </div>
      )}
    </div>
  );
};

export default Cart;
