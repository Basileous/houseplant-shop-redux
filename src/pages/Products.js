import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const plants = [
  { id: 1, name: 'Snake Plant', category: 'Low Light', price: 15 },
  { id: 2, name: 'Peace Lily', category: 'Flowering', price: 18 },
  { id: 3, name: 'Aloe Vera', category: 'Succulent', price: 12 },
  { id: 4, name: 'Fiddle Leaf Fig', category: 'Tall', price: 25 },
  { id: 5, name: 'ZZ Plant', category: 'Low Light', price: 14 },
  { id: 6, name: 'Spider Plant', category: 'Hanging', price: 10 },
];

const Products = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  return (
    <div className="products">
      {plants.map((plant) => (
        <div key={plant.id} className="plant-card">
          <img src={`https://via.placeholder.com/100?text=${plant.name}`} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button
            disabled={!!cart[plant.id]}
            onClick={() => dispatch(addToCart(plant))}
          >
            {cart[plant.id] ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;