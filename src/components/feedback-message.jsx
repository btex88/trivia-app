import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FeedbackMessage extends React.Component {
  constructor(props) {
    super(props);

    this.feedbackMessage = this.feedbackMessage.bind(this);
  }

  feedbackMessage(assertions) {
    const THREE = 3;
    if (Number(assertions) >= THREE) {
      return (
        <span
          data-testid="feedback-text"
          className="text-3xl antialiased tracking-wide text-gray-500 select-none"
        >
          Well Done!
        </span>
      );
    }
    return (
      <span
        data-testid="feedback-text"
        className="text-3xl antialiased tracking-wide text-gray-500 select-none"
      >
        Could be better...
      </span>
    );
  }

  render() {
    const {
      player: { assertions, score },
    } = this.props;
    return (
      <div className="w-full h-64 flex flex-col items-center">
        <div className="w-full h-28 flex flex-col items-center justify-evenly">
          {this.feedbackMessage(assertions)}
        </div>
        <div className="w-full h-28 flex flex-col items-center justify-evenly">
          <span className="font-semibold text-lg">Your total score was:</span>
          <span
            data-testid="feedback-total-score"
            className="text-xl font-bold"
          >
            {score}
          </span>
          <span className="font-semibold text-lg">Right answers:</span>
          <span
            data-testid="feedback-total-question"
            className="text-xl font-bold"
          >
            {Number(assertions)}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

FeedbackMessage.propTypes = {
  player: PropTypes.objectOf([PropTypes.string, PropTypes.number]).isRequired,
};

export default connect(mapStateToProps)(FeedbackMessage);
