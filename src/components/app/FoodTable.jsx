
import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap';
import Log from './Log';
import FoodUpdateComponent from './FoodUpdate';
import FoodEntryComponent from './FoodEntry';

const FoodTableComponent = (props) => {

  const [logs, setLogs] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [ updateModalOpen, setUpdateModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const deleteFood = (activeId) => {
    fetch(`http://wd64-nutrition-app.herokuapp.com/food/${activeId}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    })
    .then(() => fetchFoodTable())
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

  // Get today's dat in UTC and calculate local offset
  let todayUTC = new Date()/*.toISOString().slice(0, 10);*/
  let offset = todayUTC.getTimezoneOffset() * 60 * 1000;
  let localTime = todayUTC - offset;
  
  // Create YYYY-MM-DD strings for days
  let todayLocal = new Date(localTime).toISOString().slice(0,10);
  let yesterdayLocal = new Date(localTime - 1 * 86400000).toISOString().split('T')[0];

  let todaysLog = logs.filter(key => key.date_eaten === todayLocal);
  let yesterdaysLog = logs.filter(key => key.date_eaten === yesterdayLocal);

  return(
    <>
    <Button style={{backgroundColor:'green'}} onClick={() => setAddModalOpen(true)}>Add Food</Button>
    {
      todaysLog.map(log => (
        <Log 
          deleteFood={deleteFood}
          fetchFoodTable={fetchFoodTable}
          modalOpen={updateModalOpen}
          setModalOpen={setUpdateModalOpen}
          token={props.token}
          activeId={log.id}
          key={log.id}
          title={log.date_eaten} 
          name={log.name} 
          servings={log.servings} 
          calories={log.calories} 
          meal={log.meal} />
      ))
    }
    <FoodEntryComponent token={props.token} isOpen={addModalOpen} onClose={() => setAddModalOpen(false)} fetchFoodTable={fetchFoodTable}/>
    </>
  );
  
};



export default FoodTableComponent;