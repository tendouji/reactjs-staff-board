import * as React from 'react'
import { connect } from 'react-redux';
import { FullscreenPreloader } from '../Preloader/Preloader';
import { AlertBar } from '../AlertBar';


class BackgroundBase extends React.Component<any> {

  render() {
    const { alert, isPreloaderShown, dispatch } = this.props;

    return (
      <React.Fragment>
        <FullscreenPreloader isShown={isPreloaderShown} />
        <AlertBar isShown={!!alert.message} message={alert.message} alertType={alert.type} dispatch={dispatch} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { alert } = state;
  const { isPreloaderShown } = state.backgroundServices;
  return {
    alert,
    isPreloaderShown
  };
}

const connectedBackground = connect(mapStateToProps)(BackgroundBase);
export { connectedBackground as Background }; 