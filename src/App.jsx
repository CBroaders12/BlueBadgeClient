//Styling
import './App.css';

// React
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Components
import FoodAppIndex from './components/app/FoodAppIndex';
import NavigationComponent from './components/app/Navbar';
import AuthIndex from './Components/Auth/AuthIndex';

function App() {

  const [authenticationJWT, changeAuthJWT] =useState("");
  useEffect(() => {
    if (window.localStorage.getItem("authToken")) {
      changeAuthJWT(window.localStorage.getItem("authToken"));
    }
  }, []);
  const authenticateUser = (token) => {
    window.localStorage.setItem("authToken", token);
    changeAuthJWT(token);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavigationComponent isLoggedIn={authenticationJWT} />
        <Switch>
          <Route exact path="/authindex">
            <AuthIndex authenticateUser={authenticateUser} />
          </Route>
          <Route exact path="/food">
            <FoodAppIndex token={authenticationJWT} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
