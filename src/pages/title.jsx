import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as ACT from '../actions';
import * as COMP from '../components';

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.renderLoading = this.renderLoading.bind(this);
  }

  componentDidMount() {
    const { clickReset } = this.props;
    clickReset();
  }

  componentWillUnmount() {
    const { clickReset } = this.props;
    clickReset();
  }

  renderLoading() {
    const { questions, history } = this.props;
    if (_.isEmpty(questions) || questions.response_code) {
      return <COMP.Loading />;
    }
    return (
      <div className="w-full h-full flex flex-col items-center relative">
        <COMP.TriviaCard history={ history } />
      </div>);
  }

  render() {
    return (
      <div className="w-full h-full flex flex-col items-center">
        <COMP.Header />
        <COMP.GradientBar />
        {this.renderLoading()}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  clickReset: () => dispatch(ACT.clickReset()),
});

Title.propTypes = {
  history: PropTypes.oneOfType(PropTypes.string).isRequired,
  questions: PropTypes.objectOf([PropTypes.array, PropTypes.string]).isRequired,
  clickReset: PropTypes.func.isRequired,
  history: PropTypes.oneOfType(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Title);
