import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderPlayerInfo extends React.Component {
  render() {
    const { player: { name, score } } = this.props;
    return (
      <div
        className="w-2/3 h-full flex flex-col items-center justify-evenly"
      >
        <div className="w-full h-full flex flex-nowrap items-center justify-center">
          <span className="mr-0.5">Player:</span>
          <span>{ name }</span>
        </div>
        <div className="w-full h-full flex flex-nowrap items-center justify-center">
          <span className="mr-0.5">Score:</span>
          <span>{score}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

HeaderPlayerInfo.propTypes = {
  player: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(HeaderPlayerInfo);
