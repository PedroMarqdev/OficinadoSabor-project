import React from 'react';
import PropTypes from 'prop-types';

function HeaderName({ name }) {
  return <h1>{name}</h1>;
}

HeaderName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HeaderName;
