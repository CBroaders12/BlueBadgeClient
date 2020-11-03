import React,  { useState } from 'react';
import {  } from 'reactstrap';

import RegisterComponent from './Register';
import LoginComponent from './Login';

const AuthIndex = (props) => {

  const [ isLoggingIn, setIsLoggingIn ] = useState(true);

  const switchAuth = () => {
    setIsLoggingIn(!isLoggingIn);
  }

  if (isLoggingIn) {
    return(
      <div>
        <LoginComponent authenticateUser={props.authenticateUser} switchAuth={switchAuth}/>
      </div>
    )
  } else {
    return(
      <div>
        <RegisterComponent authenticateUser={props.authenticateUser} switchAuth={switchAuth}/>
      </div>
    )
  }
};

export default AuthIndex;