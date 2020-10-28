import React,  {  } from 'react';
import {  } from 'reactstrap';

import RegisterComponent from './Register';
import LoginComponent from './Login';

const AuthIndex = (props) => {

  return(
    <div>
      <h2>Register/Login Here</h2>
      <RegisterComponent />
      <LoginComponent />
    </div>
  );
};

export default AuthIndex;