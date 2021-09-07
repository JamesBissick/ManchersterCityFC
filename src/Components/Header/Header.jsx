import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@material-ui/core';

import { CityLogo } from '../UI/Icons';


class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppBar
            position='fixed'
            style={ {
              backgroundColor: '#6caddf',
              boxShadow: 'none',
              padding: '10px 0',
              borderBottom: '2px solid #00285e'
            } }
          >
            <Toolbar style={ {
              display: 'flex'
            } }>
              <div style={ {
                flexGrow: 1
              } }>
                <div className='header_logo'>
                  <CityLogo
                    link={true}
                    linkTo='/'
                    width='70px'
                    height='70px'
                  />
                </div>
              </div>
              <Link to='/team'>
                <Button color='inherit'>The Team</Button>
              </Link>
              <Link to='/matches'>
                <Button color='inherit'>Matches</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
      </Router>
    );
  }
}

export default Header;
