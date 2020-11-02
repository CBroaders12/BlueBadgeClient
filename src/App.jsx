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
import FoodEntryComponent from './components/app/FoodEntry';
import FoodUpdateComponent from './components/app/FoodUpdate';
import FoodTableComponent from './components/app/FoodTable';

function App() {

  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    if (window.localStorage.getItem("authToken")) {
      setToken(window.localStorage.getItem("authToken"));
      setIsLoggedIn(true);
    }
  });

  const authenticateUser = (token) => {
    window.localStorage.setItem("authToken", token);
    setToken(token);
    setIsLoggedIn(true);
  };

  const clickLogout = () => {
    localStorage.clear();
    setToken('');
    setIsLoggedIn(false);
  }

  if (isLoggedIn) {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationComponent clickLogout={clickLogout} isLoggedIn={token} />
          <Switch>
            <Route exact path="/foodentry">
              <FoodEntryComponent token={token} />
            </Route>
            <Route exact path='/foodupdate'>
              <FoodUpdateComponent token={token}/>
            </Route>
              <Route exact path='/table/:id'>
                <FoodTableComponent token={token}/>
              </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  } else {
    return(
      <div>
        <AuthIndex authenticateUser={authenticateUser}/>
      </div>
    )
  }
}

export default App;
