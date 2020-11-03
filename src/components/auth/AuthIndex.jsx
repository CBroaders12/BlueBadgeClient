import React,  { useState } from 'react';
import {  } from 'reactstrap';

import RegisterComponent from './Register';
import LoginComponent from './Login';
import { BrowserRouter } from 'react-router-dom';

const AuthIndex = (props) => {

  const [ isLoggingIn, setIsLoggingIn ] = useState(true);

  const switchAuth = () => {
    setIsLoggingIn(!isLoggingIn);
  }

  if (isLoggingIn) {
    return(
      <BrowserRouter>
      <div>
        <LoginComponent authenticateUser={props.authenticateUser} switchAuth={switchAuth}/>
      </div>
      </BrowserRouter>
    )
  } else {
    return(
      <BrowserRouter>
      <div>
        <RegisterComponent authenticateUser={props.authenticateUser} switchAuth={switchAuth}/>
      </div>
      </BrowserRouter>
    )
  }
};

export default AuthIndex;