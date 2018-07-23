import { Face } from '@material-ui/icons';
import * as React from 'react';
import './header.css';

export interface Props {
  currentPageID: string
}

class Header extends React.Component<Props, any> {
  render() {
    const { currentPageID } = this.props;
    const menuArray = [
      { 
        name: 'Main', 
        path: 'Main' 
      }, 
      {
        name: 'User List',
        path: 'Users' 
      }, 
      {
        name: 'About',
        path: 'About' 
      }];
    const menuList = menuArray.map((menuObj, index) => {
      return <li key={index}><a href={"#" + menuObj.path}>{menuObj.name}</a></li>;
    })

    return (
      <header>
        <div className="app-logo"><Face className="material-icons" /></div>
        <div className="app-title">Some title</div>
        <nav>
          <ul>{menuList}</ul>
        </nav>
        <div className="header-info">
          Page ID: {currentPageID}
        </div>
      </header>
    );
  }
}

export default Header;