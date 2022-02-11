import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as ACT from '../actions';

class Timer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleTimer = this.handleTimer.bind(this);
  }

  componentDidMount() {
    const ONE = 1000;
    this.interval = setInterval(() => {
      this.handleTimer();
    }, ONE);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleTimer() {
    const { clickStatus, clickButton, countdown, timer: { sec } } = this.props;
    if (Number(sec) !== 0 && !clickStatus) {
      countdown(sec);
    } else {
      clearInterval(this.interval);
      if (!clickStatus) clickButton();
    }
  }

  render() {
    const { timer: { sec } } = this.props;
    return (
      <div className="w-20 h-8 flex flex-nowrap justify-around absolute top-1 right-2">
        <span>Timer:</span>
        <span className="font-bold animate-pulse">{ sec }</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  countdown: (value) => dispatch(ACT.countdown(value)),
  clickButton: () => dispatch(ACT.clickButton()),
});

Timer.propTypes = {
  clickStatus: PropTypes.bool.isRequired,
  countdown: PropTypes.func.isRequired,
  clickButton: PropTypes.func.isRequired,
  timer: PropTypes.objectOf([PropTypes.string, PropTypes.number]).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
