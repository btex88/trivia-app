import React from 'react';
import * as COMP from '../components';

class Feedback extends React.Component {
  render() {
    return (
      <div className="w-full h-full flex flex-col items-center">
        <COMP.Header />
        <COMP.GradientBar />
        <COMP.FeedbackTitle />
        <div className="w-full h-full flex flex-col items-center justify-evenly">
          <COMP.FeedbackMessage />
          <COMP.RankingButton />
          <COMP.HomeButton label="Play Again" />
        </div>
      </div>
    );
  }
}

export default Feedback;
