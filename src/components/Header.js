import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartCount = useSelector((state) => state.cart.totalCount);

  return (
    <header className="header">
      <Link to="/products">Products</Link>
      <Link to="/cart">🛒 {cartCount}</Link>
    </header>
  );
};

export default Header;