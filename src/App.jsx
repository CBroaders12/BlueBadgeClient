//Styling
import './App.css';

// React
import React from 'react';
import {  } from 'reactstrap';

// Components
import FoodAppIndex from './components/app/FoodAppIndex';
import AuthIndex from './components/auth/AuthIndex';
import NavigationComponent from './components/app/Navbar';

function App() {
  return (
    <div className="App">
      <NavigationComponent />
      <h1>Hello Blue Badge</h1>
      <AuthIndex />
      <hr/>
      <FoodAppIndex />
    </div>
  );
}

export default App;
