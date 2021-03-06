import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class HomeButton extends React.Component {
  render() {
    const { label } = this.props;
    return (
      <Link to="/">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-28 h-12 rounded"
        >
          {label}
        </button>
      </Link>
    );
  }
}

HomeButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default HomeButton;
