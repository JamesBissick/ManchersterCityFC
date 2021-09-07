import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import MCityLogo from '../../Resources/images/logos/manchester_city_logo.png';

export const CityLogo = (props) => {
  const template = <div className='img_cover' style={ {
    width: props.width,
    height: props.height,
    background: `url(${ MCityLogo }) no-repeat`
  } } />;

  if (props.link) {
    return (
      <Router>
        <Link to={ props.linkTo } className='link_logo'>{ template }</Link>
      </Router>
    );
  } else {
    return template;
  }

};
