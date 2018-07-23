import * as React from 'react'
import { LoginForm } from '../LoginForm';
import { FullContainerCentered } from '../../FullContainerCentered';
import './LoginPage.css';

export class LoginPage extends React.Component<any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <FullContainerCentered>
          <div className="center-panel">
            <h1>Login</h1>
            <LoginForm onSubmit={() => console.log('Logging in')} />
          </div>
        </FullContainerCentered>
      </React.Fragment>
    );
  }
}