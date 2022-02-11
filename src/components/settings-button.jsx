import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as ACT from '../actions';
import history from '../services/history';

class SettingsButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleAPI = this.handleAPI.bind(this);
  }

  handleAPI() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  handleClick() {
    this.handleAPI();
    history.push('/settings');
  }

  render() {
    return (
      <button
        type="button"
        onClick={ () => this.handleClick() }
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-28 h-12 rounded"
      >
        Settings
      </button>
    );
  }
}

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(ACT.fetchCategories()),
});

SettingsButton.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsButton);
