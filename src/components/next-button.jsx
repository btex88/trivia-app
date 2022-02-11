import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as ACT from '../actions';

class NextButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {
      indexIncrement,
      clickReset,
      timerReset,
      indexCount,
      questionsReset,
      shuffledReset,
      indexReset,
      history,
    } = this.props;
    const FOUR = 4;
    clickReset();
    timerReset();
    if (indexCount >= FOUR) {
      questionsReset();
      shuffledReset();
      indexReset();
      history.push('/feedback');
    } else {
      indexIncrement();
    }
  }

  render() {
    return (
      <button
        type="button"
        className="w-full bg-blue-500 font-bold border-t-2 h-full text-white
        hover:bg-blue-400 border-blue-900"
        onClick={ () => this.handleClick() }
      >
        Next
      </button>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  indexIncrement: () => dispatch(ACT.indexIncrement()),
  clickReset: () => dispatch(ACT.clickReset()),
  timerReset: () => dispatch(ACT.timerReset()),
  questionsReset: () => dispatch(ACT.questionsReset()),
  shuffledReset: () => dispatch(ACT.shuffledReset()),
  indexReset: () => dispatch(ACT.indexReset()),
});

NextButton.propTypes = {
  indexIncrement: PropTypes.func.isRequired,
  history: PropTypes.oneOfType(PropTypes.string).isRequired,
  clickReset: PropTypes.func.isRequired,
  timerReset: PropTypes.func.isRequired,
  indexCount: PropTypes.number.isRequired,
  questionsReset: PropTypes.func.isRequired,
  shuffledReset: PropTypes.func.isRequired,
  indexReset: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);
