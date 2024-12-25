import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Login from './Login/Login';
import Home from './pages/Home'; 
import BookDetails from './pages/BookDetails';
import Cart from './pages/Cart';
import Layout from './pages/Layout';
import ReadingList from './pages/ReadingList';
import Payment from './Stripe/Payment'
import  './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <h1 className="h1-title">Book Library App</h1>
      <Layout />
      <Login />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/reading-list" element={<ReadingList />} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/payment" element={<Payment />} />
      </Routes>
      </div>
      </Router>
      

  );
 
}

export default App;
