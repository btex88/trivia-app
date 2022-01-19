import React from 'react';
import PropTypes from 'prop-types';

class DropdownItem extends React.Component {
  render() {
    const { label, handleClick, id } = this.props;
    return (
      <button
        type="button"
        id={ id }
        className="w-full h-auto border-b border-gray-600 p-1"
        onClick={ (e) => handleClick(e) }
        value={ label }
      >
        { label }
      </button>
    );
  }
}

DropdownItem.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default DropdownItem;
