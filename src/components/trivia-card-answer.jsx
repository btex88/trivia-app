import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as ACT from '../actions';
import store from '../store';

class TriviaCardAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.handleStyle = this.handleStyle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.calcScore = this.calcScore.bind(this);
  }

  handleStyle(isCorrect, clickStatus) {
    if (clickStatus) {
      return isCorrect
        ? {
          border: '3px solid rgb(6, 240, 15)',
          backgroundColor: '#86efac',
          borderRadius: '0.25rem',
        }
        : {
          border: '3px solid rgb(255, 0, 0)',
          backgroundColor: '#fca5a5',
          borderRadius: '0.25rem',
        };
    }
    return {
      border: '3px solid #92400E',
      borderRadius: '0.25rem',
    };
  }

  calcScore() {
    const { questions, indexCount, addScore } = this.props;
    const currentTime = store.getState().timer.sec;
    const diff = {
      hard: 3,
      medium: 2,
      easy: 1,
      plus: 10,
    };
    const currentScore = (diff[questions.results[indexCount].difficulty] * currentTime)
      + diff.plus;
    addScore(currentScore);
  }

  handleClick() {
    const { clickButton, isCorrect } = this.props;
    if (isCorrect) this.calcScore();
    clickButton();
  }

  render() {
    const {
      isCorrect,
      clickStatus,
      answer,
    } = this.props;
    return (
      <div
        className="w-full h-16 flex flex-col items-center justify-evenly text-sm py-8
        text-black"
      >
        <button
          type="button"
          className={ clickStatus
            ? 'bg-yellow-500 font-bold py-3 px-6 rounded'
            : 'bg-yellow-500 hover:bg-yellow-700 font-bold py-3 px-6 rounded' }
          style={ this.handleStyle(isCorrect, clickStatus) }
          disabled={ clickStatus }
          dangerouslySetInnerHTML={ { __html: answer } }
          aria-label={ answer }
          onClick={ () => this.handleClick() }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addScore: (payload) => dispatch(ACT.addScore(payload)),
  clickButton: () => dispatch(ACT.clickButton()),
});

TriviaCardAnswer.propTypes = {
  addScore: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
  clickButton: PropTypes.func.isRequired,
  clickStatus: PropTypes.bool.isRequired,
  indexCount: PropTypes.number.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  questions: PropTypes.objectOf([PropTypes.array, PropTypes.string]).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TriviaCardAnswer);
