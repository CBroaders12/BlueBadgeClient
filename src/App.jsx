//Styling
import './App.css';

// React
import React, {useState} from 'react';
import {  } from 'reactstrap';

// Components
import FoodAppIndex from './components/app/FoodAppIndex';
import AuthIndex from './components/auth/AuthIndex';

function App() {
  const [token, setToken] = useState('');
  return (
    <div className="App">
      <h1>Hello Blue Badge</h1>
      <AuthIndex setToken={setToken}/>
      <hr/>
      <FoodAppIndex />
    </div>
  );
}

export default App;
