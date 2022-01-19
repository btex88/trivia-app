import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TriviaCardQuestion extends React.Component {
  render() {
    const { questions: { results }, indexCount } = this.props;
    return (
      <div className="w-full h-16 flex flex-col items-center justify-evenly px-8">
        <span
          className="text-md font-semibold"
          data-testid="question-text"
          // dangerouslySetInnerHTML={ { __html: results[indexCount].question } }
        >
          {results[indexCount].question}
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

TriviaCardQuestion.propTypes = {
  questions: PropTypes.objectOf([PropTypes.array, PropTypes.string]).isRequired,
  indexCount: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(TriviaCardQuestion);
