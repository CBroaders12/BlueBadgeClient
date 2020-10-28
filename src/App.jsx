//Styling
import './App.css';

// React
import React from 'react';
import {  } from 'reactstrap';

// Components
import FoodAppIndex from './Components/App/FoodAppIndex';
import AuthIndex from './Components/Auth/AuthIndex';

function App() {
  return (
    <div className="App">
      <h1>Hello Blue Badge</h1>
      <AuthIndex />
      <hr/>
      <FoodAppIndex />
    </div>
  );
}

export default App;
