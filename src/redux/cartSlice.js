import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Массив товаров в корзине
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item._id === action.payload._id);

      if (existingItem) {
        existingItem.quantity += 1; // Увеличиваем количество
      } else {
        // Добавляем новый товар с количеством 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const existingItem = state.items.filter(item => item._id === action.payload);

      if (existingItem?.quantity > 1) {
        existingItem.quantity -= 1; // Уменьшаем количество
      } else {
        state.items = state.items.filter(item => item._id !== action.payload); // Удаляем товар
      }
    },
    clearCart: (state) => {
      state.items = []; // Очищаем корзину
    },
  },
  updateQuantity: (state, action) => {
    const { id, quantity } = action.payload;
    const item = state.items.find(item => item._id === id);
    if (item) {
      item.quantity = quantity;
    }
  },

});



// Селектор для подсчета общей стоимости товаров в корзине
export const getTotalPrice = (state) => {
  return state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
};

// Селектор для подсчета общего количества всех товаров
export const getTotalArticles = (state) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

// Селектор для количества уникальных товаров
export const selectQuantity = (state) => state.cart.items.length;

export const { addToCart, removeFromCart, clearCart, updateQuantity  } = cartSlice.actions;
export default cartSlice.reducer;
