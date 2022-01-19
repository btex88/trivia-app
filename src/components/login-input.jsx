import React from 'react';
import PropTypes from 'prop-types';

class LoginInput extends React.Component {
  render() {
    const { handleChange, id, type, value, placeholder, testId } = this.props;
    return (
      <div>
        <input
          data-testid={ testId }
          id={ id }
          type={ type }
          placeholder={ placeholder }
          value={ value }
          onChange={ (e) => handleChange(e) }
          className="appearance-none border rounded py-3 px-3 w-72 leading-tight shadow-xs
          focus:outline-none focus:shadow-outline hover:bg-blue-50 focus:bg-blue-100"
        />
      </div>
    );
  }
}

LoginInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default LoginInput;
