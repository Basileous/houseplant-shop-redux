import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, deleteItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { items, totalCount, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Cart</h2>
      <p>Total items: {totalCount}</p>
      <p>Total cost: ${totalPrice}</p>
      {Object.values(items).map((item) => (
        <div key={item.id} className="cart-item">
          <img src={`https://via.placeholder.com/100?text=${item.name}`} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>${item.price} each</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(increase(item.id))}>+</button>
            <button onClick={() => dispatch(decrease(item.id))}>-</button>
            <button onClick={() => dispatch(deleteItem(item.id))}>Remove</button>
          </div>
        </div>
      ))}
      <button disabled>Checkout (Coming Soon)</button>
      <Link to="/products"><button>Continue Shopping</button></Link>
    </div>
  );
};

export default Cart;