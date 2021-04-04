import React from 'react';
import PropTypes from 'prop-types';

function SearchBar() {
  return (
    <div className="header-container">
      <form>
        <input type="text" placeholder="Pesquise aqui!" />
      </form>
    </div>
  );
}

export default SearchBar;
