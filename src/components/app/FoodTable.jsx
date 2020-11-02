
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
      method: 'GET',
      headers: {
        "Authorization": props.token
      }
      })
      .then(response => response.json())
      .then(data => {
        setLogs(data.result);
        console.log(logs);
      })
      .catch(error => console.log(error));
      });

  useEffect(() => {
    fetchFoodTable();
  }, [])

  return(
    <>
    {
      logs.map(log => (
        <Log 
          title={log.date_eaten} 
          name={log.name} 
          description={log.description} 
          servings={log.servings} 
          calories={log.calories} 
          meal={log.meal} />
      ))
    }
    </>
  );
  
};



export default FoodTableComponent;