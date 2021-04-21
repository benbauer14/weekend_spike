import React from 'react';
import {useSelector} from 'react-redux';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import './UserPage.css'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <div onClick={() => {history.push('/search')}}><Button color="primary">Search</Button></div>
      <div onClick={() => {history.push('/trade')}}><Button color="primary">Trade/Sell Items</Button></div>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
