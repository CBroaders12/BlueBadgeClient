
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
    fetch('http://wd64-nutrition-app.herokuapp.com/food', {

    body: JSON.stringify({}),
    headers: {"Authorization": props.token}
  }).then(response => response.json())
  .then(data => setLogs(data))
  .catch(error => console.log(error));
  }, [setLogs]);

  return(
    <>
    {/* <FoodUpdateComponent activeId={activeId}/> */}
    {logs.map(log => (
      <Log 
        title={log.result.date_eaten} 
        name={log.result.name} 
        description={log.result.description} 
        servings={log.result.servings} 
        calories={log.result.calories} 
        meal={log.result.meal} />
        
    ))}
    
    </>
  );
  
};



export default FoodTableComponent;