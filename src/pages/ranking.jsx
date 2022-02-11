import React from 'react';
import * as COMP from '../components';
import local from '../services/handle-local';

class Ranking extends React.Component {
  constructor(props) {
    super(props);

    this.renderRankingCards = this.renderRankingCards.bind(this);
  }

  renderRankingCards() {
    const ranking = local.get.ranking();
    ranking.sort((value1, value2) => value2.score - value1.score);
    return ranking.map(({ name, picture, score }, index) => (
      <COMP.RankingCard
        key={ Math.random() * index }
        index={ index }
        name={ name }
        picture={ picture }
        score={ score }
      />
    ));
  }

  render() {
    return (
      <div className="h-full w-full flex flex-col items-center">
        <COMP.RankingTitle />
        <div className="h-full w-full flex flex-col items-center justify-evenly">
          { this.renderRankingCards() }
          <COMP.HomeButton label="Home" />
        </div>
      </div>
    );
  }
}

export default Ranking;
