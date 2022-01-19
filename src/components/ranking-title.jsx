import React from 'react';

class RankingTitle extends React.Component {
  render() {
    return (
      <div className="h-20 w-full flex flex-col items-center justify-center">
        <span data-testid="ranking-title" className="text-4xl text-gray-500">
          Ranking
        </span>
      </div>
    );
  }
}

export default RankingTitle;
