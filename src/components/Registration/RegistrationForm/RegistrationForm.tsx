import * as React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AccountBox, VpnKey, Face, Email } from '@material-ui/icons';
import { userActions } from '../../../actions';
import { registrationFormDetails } from '../../../constants/formFields';
import { backgroundActions } from '../../../actions/background';

interface RegistrationState {
  user: {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
  }
  submitted: boolean,
  [key: string]: any
}

class RegistrationFormBase extends React.Component<any, RegistrationState> {
  constructor(props) {
    super(props); 

    /** put fields in user object for ease of dispatch */
    this.state = {
      user: {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    const { user } = this.state;
    this.setState({ 
      user: {
        ...user,
        [name]: value 
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    if (user.firstName && user.lastName && user.username && user.password && user.email) {
      dispatch(backgroundActions.togglePreloader(true));
      dispatch(userActions.register(user));
    }
  }

  switchIcon(type) {
    switch (type) {
      case VpnKey:
        return <VpnKey className="material-icons" />;
      case Email:
        return <Email className="material-icons" />;
      case AccountBox:
        return <AccountBox className="material-icons" />;
      default:
        return <Face className="material-icons" />;
    }
  }

  renderInput = (name, iconName, stateValue) => {
    const { submitted } = this.state;
    const fieldDetails = registrationFormDetails.fields[name]
    
    return (
      <div className={'input-row single-line has-icon' + (submitted && !stateValue ? ' has-error' : '')}>
        <label htmlFor={name}>
          <span className="icon">
            {this.switchIcon(iconName)}
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
    const { user } = this.state;

    return (
      <form name={registrationFormDetails.name} onSubmit={this.handleSubmit}>

        {this.renderInput('username', AccountBox, user.username)}
        {this.renderInput('password', VpnKey, user.password)}
        {this.renderInput('firstName', VpnKey, user.firstName)}
        {this.renderInput('lastName', VpnKey, user.lastName)}
        {this.renderInput('email', VpnKey, user.email)}

        <div className="form-group">
          <button className="btn btn-primary">Register</button>
          <Link to="/login" className="btn btn-primary ghost">Cancel</Link>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  const { registering } = state.authentication;
  return {
    registering
  };
}

const connectedRegistrationForm = connect(mapStateToProps)(RegistrationFormBase);
export { connectedRegistrationForm as RegistrationForm }; 