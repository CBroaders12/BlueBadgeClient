
import React, {useState, useEffect} from 'react';
import Log from './Log';
import FoodUpdateComponent from './FoodUpdate';

const FoodTableComponent = (props) => {

  const [logs, setLogs] = useState([]);
  const [activeId, setActiveId] = useState(null);

  
console.log(logs);

  // useEffect(() => {
  //   fetch('http://wd64-nutrition-app.herokuapp.com/food', {

  //   body: JSON.stringify({owner_id, date_eaten}),
  //   headers: {"Authorization": props.token}
  // }).then(response => response.json())
  // .then(data => setLogs(data))
  // .catch(error => console.log(error));
  // }, [setLogs]);
console.log(props.token)
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