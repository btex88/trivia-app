import React from 'react';
import PropTypes from 'prop-types';

class RankingCard extends React.Component {
  render() {
    const { name, picture, score } = this.props;
    return (
      <div
        className="w-72 h-28 border shadow-2xl flex flex-nowrap items-center
        justify-evenly rounded-lg pr-2 bg-blue-100 border-blue-800 text-sm leading-2"
      >
        <img className="h-16 rounded-full" src={ picture } alt={ name } />
        <div className="w-2/3 h-full flex flex-col items-center justify-evenly pt-2.5">
          <div className="w-full h-1/2 flex  justify-center">
            <span className="mr-0.5">Player:</span>
            <span
              className="font-bold"
            >
              {name}
            </span>
          </div>
          <div className="w-full h-1/2 flex flex-nowrap items-center justify-center">
            <span className="mr-0.5">Score:</span>
            <span
              className="font-bold"
            >
              {score}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

RankingCard.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default RankingCard;
