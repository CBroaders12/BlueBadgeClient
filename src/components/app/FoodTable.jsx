
import React, {useState, useEffect} from 'react';
import Log from './Log';
import FoodUpdateComponent from './FoodUpdate';

const FoodTableComponent = (props) => {

  const [logs, setLogs] = useState([]);
  const [activeId, setActiveId] = useState(null);

  const deleteFood = () => {
    fetch(`http://wd64-nutrition-app.herokuapp.com/food/${activeId}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    })
    .then(() => props.fetchFoodTable())
  }

  const fetchFoodTable = (() => {
    fetch('https://wd64-nutrition-app.herokuapp.com/food', {
      headers: {
        "Authorization": props.token
      },
      body: JSON.stringify({
        date_eaten: new Date()
      })
      })
      .then(response => {
        console.log(props.token)
        response.json()
      })
      .then(data => {
        console.log(data);
        setLogs(data.result);
        console.log(logs);
      })
      .catch(error => console.log(error));
      });

  useEffect(() => {
    fetchFoodTable();
  })

  return(
    <>
    {logs}
    {
      // logs.map(log => (
      //   <Log 
      //     title={log.result.date_eaten} 
      //     name={log.result.name} 
      //     description={log.result.description} 
      //     servings={log.result.servings} 
      //     calories={log.result.calories} 
      //     meal={log.result.meal} />
      // ))
    }
    </>
  );
  
};



export default FoodTableComponent;