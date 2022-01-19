import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import local from '../services/handle-local';
import encryptEmail from '../services/encrypt-email';

class RankingButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleLocalStorage = this.handleLocalStorage.bind(this);
  }

  handleLocalStorage() {
    const { player } = this.props;
    const currentLocal = local.get.ranking();
    if (!currentLocal || _.isEmpty(currentLocal)) {
      local.ranking([
        {
          name: player.name,
          score: player.score,
          picture: `https://www.gravatar.com/avatar/${encryptEmail(
            player.gravatarEmail,
          )}`,
        },
      ]);
    } else {
      local.ranking([...currentLocal,
        {
          name: player.name,
          score: player.score,
          picture: `https://www.gravatar.com/avatar/${encryptEmail(
            player.gravatarEmail,
          )}`,
        },
      ]);
    }
  }

  render() {
    return (
      <Link to="/ranking">
        <button
          type="button"
          data-testid="btn-ranking"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-28 h-12 rounded"
          onClick={ () => this.handleLocalStorage() }
        >
          Ranking
        </button>
      </Link>
    );
  }
}

const mapStateToProps = (state) => state;

RankingButton.propTypes = {
  player: PropTypes.objectOf([PropTypes.string, PropTypes.number]).isRequired,
};

export default connect(mapStateToProps)(RankingButton);
