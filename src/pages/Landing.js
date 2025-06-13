import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1>GreenScape Houseplants</h1>
      <p>Your favorite online destination for stunning indoor plants.</p>
      <button onClick={() => navigate('/products')}>Get Started</button>
    </div>
  );
};

export default Landing;