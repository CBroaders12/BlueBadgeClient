//Styling
import './App.css';

// React
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Components
import FoodAppIndex from './components/app/FoodAppIndex';
import NavigationComponent from './components/app/Navbar';
import AuthIndex from './components/auth/AuthIndex';
import RegisterComponent from './components/auth/Register';
import LoginComponent from './components/auth/Login';

function App() {

  const [token, setToken] =useState("");
  useEffect(() => {
    if (window.localStorage.getItem("authToken")) {
      setToken(window.localStorage.getItem("authToken"));
    }
  }, []);
  const authenticateUser = (token) => {
    window.localStorage.setItem("authToken", token);
    setToken(token);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavigationComponent isLoggedIn={token} />
        <Switch>
          <Route exact path="/register">
            <RegisterComponent authenticateUser={authenticateUser} />
          </Route>
          <Route exact path="/login">
            <LoginComponent authenticateUser={authenticateUser}/>
          </Route>
          <Route exact path="/food">
            <FoodAppIndex token={token} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
