import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

  return(
    <div className="header">
      <Link to="/" className="btn btn-info" role="button">Users Name</Link>
      <Link to="/users" className="btn btn-info btn_space" role="button">Users</Link>
      <Link to="/posts" className="btn btn-info btn_space" role="button">Posts</Link>
    </div>
  )
}


export default Header;
