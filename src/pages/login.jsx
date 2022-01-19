import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as COMP from '../components';
import validateEmail from '../services/validate-email';
import local from '../services/handle-local';
import * as ACT from '../actions';
import answerShuffler from '../services/answer-shuffler';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validateButton = this.validateButton.bind(this);
    this.newRequest = this.newRequest.bind(this);
  }

  componentDidMount() {
    const { resetScore } = this.props;
    resetScore();
  }

  newRequest() {
    const { fetchToken, fetchQuestions, addShuffled } = this.props;
    fetchToken()
      .then((value) => {
        local.token(value.payload);
        fetchQuestions(value.payload.token).then((data) => addShuffled(
          answerShuffler(data.payload.results),
        ));
      });
  }

  handleClick() {
    const { history, fetchToken, addPlayer, fetchQuestions, addShuffled } = this.props;
    const { name, email } = this.state;
    const THREE = 3;
    fetchToken()
      .then((value) => {
        local.token(value.payload);
        addPlayer({ name, gravatarEmail: email });
        fetchQuestions(value.payload.token).then((data) => {
          if (data.payload.response_code === THREE) {
            this.newRequest();
          } else {
            addShuffled(answerShuffler(data.payload.results));
          }
        });
      }).then(() => history.push('/title'));
  }

  validateButton() {
    const { name, email } = this.state;
    if (name && validateEmail(email)) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  handleChange(e) {
    const { id, value } = e.target;
    this.setState({ [id]: value }, () => this.validateButton());
  }

  render() {
    const { history } = this.props;
    const { email, name, isDisabled } = this.state;
    return (
      <div className="w-full h-full flex flex-col items-center justify-evenly">
        <COMP.LoginTitle />
        <div className="w-full h-28 flex flex-col items-center justify-between">
          <COMP.LoginInput
            placeholder="Digite seu nome"
            type="text"
            id="name"
            testId="input-player-name"
            value={ name }
            handleChange={ this.handleChange }
          />
          <COMP.LoginInput
            placeholder="exemplo@email.com"
            type="email"
            id="email"
            testId="input-gravatar-email"
            value={ email }
            handleChange={ this.handleChange }
          />
        </div>
        <div className="w-full h-28 flex flex-col items-center justify-between">
          <COMP.LoginButton
            label="Play"
            testId="btn-play"
            handleClick={ this.handleClick }
            isDisabled={ isDisabled }
          />
          <COMP.SettingsButton history={ history } />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchToken: () => dispatch(ACT.fetchToken()),
  fetchQuestions: (token) => dispatch(ACT.fetchQuestions(token)),
  addPlayer: (payload) => dispatch(ACT.addPlayer(payload)),
  addShuffled: (payload) => dispatch(ACT.addShuffled(payload)),
  resetScore: () => dispatch(ACT.resetScore()),
});

Login.propTypes = {
  history: PropTypes.oneOfType(PropTypes.string).isRequired,
  fetchToken: PropTypes.func.isRequired,
  addPlayer: PropTypes.func.isRequired,
  fetchQuestions: PropTypes.func.isRequired,
  addShuffled: PropTypes.func.isRequired,
  resetScore: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
