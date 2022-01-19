import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TriviaCardCategory extends React.Component {
  render() {
    const { questions: { results }, indexCount } = this.props;
    return (
      <div className="w-full flex flex-col items-center justify-evenly pt-8 pb-4">
        <span
          className="capitalize text-semibold"
          data-testid="question-category"
          dangerouslySetInnerHTML={ { __html: results[indexCount].category } }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

TriviaCardCategory.propTypes = {
  questions: PropTypes.objectOf([PropTypes.array, PropTypes.string]).isRequired,
  indexCount: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(TriviaCardCategory);
