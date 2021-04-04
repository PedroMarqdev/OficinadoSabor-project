import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ChoiceButton({ name, link }) {
  return (
    <CSSTransition appear timeout={500} classNames="choice">
      <Link className="choices-box" to={link}>
        <div>
          <h1>{name}</h1>
        </div>
      </Link>
    </CSSTransition>
  );
}

ChoiceButton.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ChoiceButton;
