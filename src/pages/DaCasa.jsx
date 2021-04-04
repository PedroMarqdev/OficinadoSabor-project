import React from 'react';
import HeaderName from '../components/HeaderName';
import SearchBar from '../components/SearchBar';

function Doces() {
  return (
    <div>
      <header className="header-container">
        <HeaderName name={'Oficina \nda \ncasa'} />
        <SearchBar type="daCasa" />
      </header>
    </div>
  );
}

export default Doces;
