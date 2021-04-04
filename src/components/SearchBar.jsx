import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DocesCategorias from './DocesCategorias';
import DaCasaCategorias from './DaCasaCategorias';

function SearchBar({ type }) {
  return (
    <div className="search-container">
      <form>
        <input className="search-bar" type="text" placeholder="Pesquise aqui!" />
        <FontAwesomeIcon size="3x" icon={faSearch} />
      </form>
      {type === 'doces' ? <DocesCategorias /> : <DaCasaCategorias />}
    </div>
  );
}

SearchBar.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SearchBar;
