import * as React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AccountBox, VpnKey } from '@material-ui/icons';
import { userActions } from '../../../actions';
import { loginFormDetails } from '../../../constants/formFields';
import { backgroundActions } from '../../../actions/background';

interface LoginState {
  username: string,
  password: string,
  submitted: boolean,
  [key: string]: any
}

class LoginFormBase extends React.Component<any, LoginState> {
  constructor(props) {
    super(props); 

    this.props.dispatch(userActions.logout()); // reset login status

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(backgroundActions.togglePreloader(true));
      dispatch(userActions.login(username, password));
    }
  }

  renderInput = (name, iconName, stateValue) => {
    const { submitted } = this.state;
    const fieldDetails = loginFormDetails.fields[name]

    return (
      <div className={'input-row single-line has-icon' + (submitted && !stateValue ? ' has-error' : '')}>
        <label htmlFor={name}>
          <span className="icon">
            {iconName === VpnKey ? (
              <VpnKey className="material-icons" />
            ) : (
              <AccountBox className="material-icons" />
            )}
          </span>
          <span className="text">{fieldDetails.label}</span>
        </label>
        <input
          className="form-control"
          autoComplete="off"
          type={fieldDetails.type}
          name={name}
          value={stateValue}
          onChange={this.handleChange}
        />
        {submitted && !stateValue &&
          <div className="error-message">{fieldDetails.errorMessage}</div>
        }
      </div>
    )
  }

  render() {
    const { username, password } = this.state;

    return (
      <form name={loginFormDetails.name} onSubmit={this.handleSubmit}>

        {this.renderInput('username', AccountBox, username)}
        {this.renderInput('password', VpnKey, password)}

        <div className="form-group">
          <button className="btn btn-primary">Login</button>
          <Link to="/register" className="btn btn-primary ghost">Register</Link>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const connectedLoginForm = connect(mapStateToProps)(LoginFormBase);
export { connectedLoginForm as LoginForm }; 