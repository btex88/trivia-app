import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as COMP from '../components';
import * as ACT from '../actions';

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cat: '',
      diff: '',
      type: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { addFilter, categories } = this.props;
    const { id, value } = e.target;
    this.setState({ [id]: value }, () => {
      if (id === 'diff') addFilter({ [id]: _.toLower(value) });
      if (id === 'type') {
        addFilter({ [id]: (_.has(value, /multiple/i) ? 'multiple' : 'boolean') });
      }
      if (id === 'cat') {
        addFilter({ [id]: categories.list.find((cat) => cat.name === value).id });
      }
    });
  }

  render() {
    const { categories } = this.props;
    const { cat, diff, type } = this.state;
    return (
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-full h-24 flex flex-col items-center justify-center">
          <span className="text-4xl text-gray-500">
            Settings
          </span>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-evenly">
          <COMP.Dropdown
            id="cat"
            label={ cat || 'Categories' }
            valuesArr={ categories.list }
            handleClick={ this.handleClick }
          />
          <COMP.Dropdown
            id="diff"
            label={ diff || 'Difficulty' }
            valuesArr={ ['Hard', 'Easy', 'Medium'] }
            handleClick={ this.handleClick }
          />
          <COMP.Dropdown
            id="type"
            label={ type || 'Type' }
            valuesArr={ ['Multiple Choice', 'True / False'] }
            handleClick={ this.handleClick }
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  addFilter: (payload) => dispatch(ACT.addFilter(payload)),
});

Settings.propTypes = {
  categories: PropTypes.objectOf([PropTypes.string, PropTypes.array]).isRequired,
  addFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
