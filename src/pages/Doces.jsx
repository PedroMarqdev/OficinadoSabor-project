import React from 'react';
import HeaderName from '../components/HeaderName';
import SearchBar from '../components/SearchBar';

function Doces() {
  return (
    <div className="main-container">
      <header className="header-container">
        <HeaderName name={'Oficina \nde \ndoces'} />
        <SearchBar type="doces" />
      </header>
    </div>
  );
}

export default Doces;
