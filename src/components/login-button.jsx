import React from 'react';
import PropTypes from 'prop-types';

class LoginButton extends React.Component {
  render() {
    const { label, handleClick, isDisabled } = this.props;
    return (
      <button
        type="button"
        onClick={ () => handleClick() }
        disabled={ isDisabled }
        className={ isDisabled
          ? `bg-blue-500 text-white font-bold w-28 h-12 rounded opacity-50
          cursor-not-allowed`
          : 'bg-blue-500 hover:bg-blue-700 text-white font-bold w-28 h-12 rounded' }
      >
        { label }
      </button>
    );
  }
}

LoginButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default LoginButton;
