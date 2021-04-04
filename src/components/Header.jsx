import React from 'react';
import PropTypes from 'prop-types';

function Header({ name }) {
  return (
    <header className="header-container">
      <h1>{name}</h1>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
