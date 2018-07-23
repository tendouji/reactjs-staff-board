import * as React from 'react';
import './FullContainerCentered.css';

export class FullContainerCentered extends React.Component<any> {
  render() {
    return (
      <div className="full-container">
        <div className="page-container">
          <div className="page-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}