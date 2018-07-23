import * as React from 'react';
import { Warning, Info } from '@material-ui/icons';
import { alertActions } from '../../actions';
import { alertLifeSpan, alertTransitionSpan } from '../../constants';
import './AlertBar.css'

interface outerProps {
  isShown: boolean,
  message: string,
  alertType: string
}

type alertBarProps = outerProps & { dispatch }

export class AlertBar extends React.Component<alertBarProps> {
  state = {
    _message: ''
  }

  componentDidUpdate(prevProps, prevState) {
    const { dispatch } = this.props;

    if (prevProps.isShown !== this.props.isShown) {
      if (this.props.isShown) {
        this.setState({
          _message: this.props.message
        })
        setTimeout(()=> {
          dispatch(alertActions.clear());
          setTimeout(() => {
            this.setState({_message: ''})
          }, alertTransitionSpan)
        }, alertLifeSpan*100)
      } 
    }
  }

  render() {
    const { _message } = this.state
    const { isShown, message, alertType } = this.props

    return (
      <div className={`alert-panel${isShown ? ' show' : ''}${alertType ? ` ${alertType}` : ''}`}>
        <span className='icon'>
          {alertType === 'alert-danger' ? (
            <Warning className="material-icons" />
          ) : (
            <Info className="material-icons" />
          )}
        </span>
        {_message}
      </div>
    );
  }
}