
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
        "Content-Type": "application/json",
        "Authorization": props.token
      }
      })
      .then(response => response.json())
      .then(data => setLogs(data.result))
      .catch(error => console.log(error));
      });

  useEffect(() => {
    fetchFoodTable();
  }, [])

  let today = new Date().toISOString().slice(0, 10);
  let yesterday = new Date(Date.now() - 1 * 86400000).toISOString().split('T')[0];
  let todaysLog = logs.filter(key => key.date_eaten === today);
  let yesterdaysLog = logs.filter(key => key.date_eaten === yesterday);

  return(
    <>
    {
      todaysLog.map(log => (
        <Log 
          title={log.date_eaten} 
          name={log.name} 
          servings={log.servings} 
          calories={log.calories} 
          meal={log.meal} />
      ))
    }
    </>
  );
  
};



export default FoodTableComponent;