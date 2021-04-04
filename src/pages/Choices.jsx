import React from 'react';
import ChoiceButton from '../components/ChoiceButton';

function Choices() {
  return (
    <div className="hero-container column">
      <header className="choices-header">
        <h1>Bem-vindo</h1>
        <h1>A sua dose diária de sabor.</h1>
        <p>Conheça nossos produtos!</p>
      </header>
      <section className="choices-select">
        <ChoiceButton name={'Oficina \nda \ncasa'} link="/DaCasa" />
        <ChoiceButton name={'Oficina \nde \ndoces'} link="/doces" />
      </section>
    </div>
  );
}

export default Choices;
