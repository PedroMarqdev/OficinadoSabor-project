import React, { useState, useEffect } from 'react';
import Choices from './Choices';

function Welcome() {
  const [falseLoading, setFalseLoading] = useState(false);
  const falseFuncLoading = () => setTimeout(() => setFalseLoading(true), 2000);
  useEffect(() => {
    falseFuncLoading();
  });
  if (falseLoading) return <Choices />;
  return (
    <div className="hero-container">
      <header className="hero-title">Oficina do Sabor</header>
    </div>
  );
}

export default Welcome;
