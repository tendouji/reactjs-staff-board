import * as React from 'react';
import Lottie from 'react-lottie';
import { lottieDefaultOptions } from '../../constants';
import { preloaderData } from '../../assets/images/svg';
import './Preloader.css';

interface preloaderProps {
  isShown: boolean
}

export class FullscreenPreloader extends React.Component<preloaderProps> {
  state = {
    lottieOptions: {
      ...lottieDefaultOptions,
      animationData: preloaderData,
    },
    isStopped: false,
    isPaused: false,
    size: 100
  }

  render() {
    return (
      <React.Fragment>{
        this.props.isShown && 
        (
          <div className="overlay">
            <div className="icon-holder">
              <Lottie options={this.state.lottieOptions}
                height={this.state.size}
                width={this.state.size}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused} />
            </div>
          </div>
        )
      }</React.Fragment>
    );
  }
}