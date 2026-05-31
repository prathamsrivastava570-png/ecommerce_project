import React, { useState } from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
import ProductCard from './components/Productcard';
import Footer from './components/footer';
import Login from './components/Login';
import products from './data/products';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSearch, setActiveSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [toast, setToast] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setToast(`"${product.name}" added to cart! 🛒`);
    setTimeout(() => setToast(''), 2000);
  };

  const handleIncrease = (id) => {
    setCart((prev) =>
      prev.map((item) => item.id === id ? { ...item, qty: item.qty + 1 } : item)
    );
  };

  const handleDecrease = (id) => {
    setCart((prev) =>
      prev
        .map((item) => item.id === id ? { ...item, qty: item.qty - 1 } : item)
        .filter((item) => item.qty > 0)
    );
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleSearch = () => {
    setActiveSearch(searchQuery.toLowerCase().trim());
    setActiveCategory('All');
  };

  const filteredProducts = products.filter((p) => {
    const matchesSearch = activeSearch === '' || p.name.toLowerCase().includes(activeSearch);
    const matchesCategory = activeCategory === 'All' || p.cat === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
     <Header
  cartCount={totalItems}
  searchQuery={searchQuery}
  onSearchChange={setSearchQuery}
  onSearch={handleSearch}
  onCartClick={() => setShowCart(true)}
  isLoggedIn={isLoggedIn}
  onLoginClick={() => setShowLogin(true)}
  onLogout={() => setIsLoggedIn(false)}
/>
      <Navbar activeCategory={activeCategory} onCategoryClick={setActiveCategory} />

      <div className="banner">
        <div className="banner-text">
          <h2>Great Indian Sale</h2>
          <p>Up to 70% off on top brands</p>
        </div>
      </div>

      {toast && <div className="toast">{toast}</div>}

      <section className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))
        ) : (
          <div className="no-results">No products found for "<strong>{activeSearch || activeCategory}</strong>"</div>
        )}
      </section>

      <Footer />

      {showCart && (
        <div className="cart-overlay" onClick={() => setShowCart(false)}>
          <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h2>🛒 Your Cart</h2>
              <button className="cart-close" onClick={() => setShowCart(false)}>✕</button>
            </div>

            {cart.length === 0 ? (
              <div className="cart-empty">
                <p>Your cart is empty!</p>
                <button onClick={() => setShowCart(false)}>Continue Shopping</button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <img src={item.image} alt={item.name} />
                      <div className="cart-item-info">
                        <p className="cart-item-name">{item.name}</p>
                        <p className="cart-item-price">₹{(item.price * item.qty).toLocaleString()}</p>
                        <div className="cart-item-controls">
                          <button onClick={() => handleDecrease(item.id)}>−</button>
                          <span>{item.qty}</span>
                          <button onClick={() => handleIncrease(item.id)}>+</button>
                          <button className="remove-btn" onClick={() => handleRemove(item.id)}>🗑</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-footer">
                  <p>Total ({totalItems} items): <strong>₹{totalPrice.toLocaleString()}</strong></p>
                  <button className="checkout-btn">Proceed to Checkout</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {showLogin && (
  <div className="cart-overlay" onClick={() => setShowLogin(false)}>
    <div className="login-popup" onClick={(e) => e.stopPropagation()}>
      <Login onLogin={() => { setIsLoggedIn(true); setShowLogin(false); }} />
    </div>
  </div>
)}
    </div>
  );
}

export default App;