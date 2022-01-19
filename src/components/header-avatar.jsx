import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import encryptEmail from '../services/encrypt-email';

class HeaderAvatar extends React.Component {
  render() {
    const { player } = this.props;
    return (
      <div className="w-1/3 h-full flex flex-col items-center justify-evenly">
        <img
          data-testid="header-profile-picture"
          className="rounded-full w-12 h-12"
          src={ `https://www.gravatar.com/avatar/${encryptEmail(
            player.gravatarEmail,
          )}` }
          alt="player avatar"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

HeaderAvatar.propTypes = {
  player: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(HeaderAvatar);
