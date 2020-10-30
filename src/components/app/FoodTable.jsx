
import React, {useState} from 'react';
import Log from './Log';

const FoodTableComponent = (props) => {

  const [logs, setLogs] = useState([]);

  fetch('http://wd64-nutrition-app.herokuapp.com', {
    headers: {"Authorization": props.token}
  }).then(response => response.json())
  .then(data => setLogs(data))
  .catch(error => console.log(error));

  return(
    <>
    {logs.map(log => (
      <Log 
        title={logs.result.date_eaten} 
        name={logs.result.name} 
        description={logs.result.description} 
        servings={logs.result.servings} 
        calories={logs.result.calories} 
        meal={logs.result.meal} />
    ))}
    </>
  );
  
};



export default FoodTableComponent;