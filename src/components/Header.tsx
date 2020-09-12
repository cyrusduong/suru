import React from 'react';
import moment from 'moment';

const Header = () => {
  const today = moment().format('MMM Do, YYYY');

  return (<div className="header flex-container-center">
    <h1 className="title">する - To do</h1>
    <h2 className="fira thin">It is: <span className="today-font">{today}</span></h2>
  </div>);
};

export default Header;