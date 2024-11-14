import React from 'react';
// importing data.js file
import { Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    // <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="h-brand" to="/">
            amazon advanced
          </Link>
        </div>
        <div>
          <Link to="/cart">
            Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
          </Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/cart/:id?" element={<CartScreen />}></Route>
          {/* Updated to use 'element' instead of 'component' */}
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/" element={<HomeScreen />} exact />
        </Routes>
      </main>
      <footer className="row center">&copy; All rights reserved</footer>
    </div>
    // </BrowserRouter>
  );
}

export default App;
