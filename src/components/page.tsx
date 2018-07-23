import * as React from 'react';
import './page.css';

import Header from './header';

export interface Props {
  pageID: string;
  pageInfo: {
    title: string
  };
}

class Page extends React.Component<Props, any> {
  render() {
    const { pageID, pageInfo } = this.props;

    return (
      <div className="page-container">
        <Header currentPageID={pageID} />
        <div className="page-content">
          Hello {pageInfo.title}!
        </div>
      </div>
    );
  }
}

export default Page;