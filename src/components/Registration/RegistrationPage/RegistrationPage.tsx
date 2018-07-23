import * as React from 'react'
import { RegistrationForm } from '../RegistrationForm/RegistrationForm';
import { FullContainerCentered } from '../../FullContainerCentered';
import './RegistrationPage.css';

export class RegistrationPage extends React.Component<any> {
  constructor(props) { 
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <FullContainerCentered>
          <div className="center-panel">
            <h1>Register</h1>
            <RegistrationForm onSubmit={() => console.log('do something')} />
          </div>
        </FullContainerCentered>
      </React.Fragment>
    );
  }
}