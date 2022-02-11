import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import * as COMP from './index';

class TriviaCard extends React.Component {
  constructor(props) {
    super(props);

    this.renderAnswers = this.renderAnswers.bind(this);
  }

  renderAnswers() {
    const { shuffledAnswers, indexCount, questions } = this.props;
    return shuffledAnswers[indexCount].map((value) => (
      <COMP.TriviaCardAnswer
        key={ Math.random() }
        correctAnswer={ questions.results[indexCount].correct_answer }
        difficulty={ questions.results[indexCount].difficulty }
        testId={ value.isCorrect ? 'correct-answer' : `wrong-answer-${value.index}` }
        isCorrect={ value.isCorrect }
        answer={ value.answer }
      />
    ));
  }

  render() {
    const { shuffledAnswers, clickStatus, indexCount, history } = this.props;
    const FIVE = 5;
    return (
      <div className="w-full h-full flex flex-col items-center justify-evenly">
        { indexCount < FIVE && (
          <>
            <div className="w-full h-36 flex flex-col items-center justify-evenly">
              <COMP.TriviaCardCategory />
              <COMP.TriviaCardQuestion />
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
              {_.isEmpty(shuffledAnswers) || this.renderAnswers()}
            </div>
            <div className="w-full h-16 flex-col items-center justify-evenly">
              { clickStatus && <COMP.NextButton history={ history }/> }
            </div>
          </>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

TriviaCard.propTypes = {
  questions: PropTypes.objectOf([PropTypes.array, PropTypes.string]).isRequired,
  shuffledAnswers: PropTypes.arrayOf(PropTypes.object).isRequired,
  indexCount: PropTypes.number.isRequired,
  clickStatus: PropTypes.bool.isRequired,
  history: PropTypes.oneOfType(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(TriviaCard);
