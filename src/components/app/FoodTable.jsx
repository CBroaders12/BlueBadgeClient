
import React, {useState, useEffect, useReducer} from 'react';
import { Button, Table, Container } from 'reactstrap';
import Log from './Log';
import FoodUpdateComponent from './FoodUpdate';
import FoodEntryComponent from './FoodEntry';

const FoodTableComponent = (props) => {

  const [logs, setLogs] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [ updateModalOpen, setUpdateModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [ totalCals, setTotalCals] = useState(0);
  const [dayLog, setDayLog] = useState(0);


  //const calorieTotal = {props.calories}

  

  const deleteFood = (activeId) => {
    fetch(`https://wd64-nutrition-app.herokuapp.com/food/${activeId}`, {
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
  useEffect(() => {
    fetchFoodTable();
  }, [setDayLog])

  // Get today's dat in UTC and calculate local offset
  let todayUTC = new Date()/*.toISOString().slice(0, 10);*/
  let offset = todayUTC.getTimezoneOffset() * 60 * 1000;
  let localTime = todayUTC - offset;
  
  // Create YYYY-MM-DD strings for days
  //let todayLocal = new Date(localTime).toISOString().slice(0,10);
  let todayLocal = new Date(localTime - dayLog * 86400000).toISOString().split('T')[0];

  //let todaysLog = logs.filter(key => key.date_eaten === todayLocal);
  let todaysLog = logs.filter(key => key.date_eaten === todayLocal);

  let todaysBreakfast = todaysLog.filter(key => key.meal === "Breakfast");
  let todaysLunch = todaysLog.filter(key => key.meal === "Lunch");
  let todaysDinner = todaysLog.filter(key => key.meal === "Dinner");
  let todaysSnack = todaysLog.filter(key => key.meal === "Snack");

  const calTotal = todaysLog.reduce((totalCalories, today) => totalCalories + today.calories, 0);
  const breakfastTotal = todaysBreakfast.reduce((totalCalories, breakfast) => totalCalories + breakfast.calories, 0);
  const lunchTotal = todaysLunch.reduce((totalCalories, lunch) => totalCalories + lunch.calories, 0);
  const dinnerTotal = todaysDinner.reduce((totalCalories, dinner) => totalCalories + dinner.calories, 0);
  const snackTotal = todaysSnack.reduce((totalCalories, snack) => totalCalories + snack.calories, 0);
  

  return(
    <>
    <Container fluid="md">
      <Button className='addFood' style={{backgroundColor:'green'}} onClick={() => setAddModalOpen(true)} className="my-4">Add Food</Button>
      <Table>
        <thead>
          <tr>
            <th>Food</th>
            <th>Servings</th>
            <th>Calories</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan="2">Breakfast</th>
            <th>{breakfastTotal}</th>
            <th></th>
            <th></th>
          </tr>
            {
              todaysBreakfast.map(log => {
                return(
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
                )
              })
            }
          <tr>
            <th colSpan="2">Lunch</th>
            <th>{lunchTotal}</th>
            <th></th>
            <th></th>
          </tr>
          {
            todaysLunch.map(log => {
              return(
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
              )
            })
          }
          <tr>
            <th colSpan="2">Dinner</th>
            <th>{dinnerTotal}</th>
            <th></th>
            <th></th>
          </tr>
          {
            todaysDinner.map(log => {
              return(
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
              )
            })
          }
          <tr>
            <th colSpan="2">Snack</th>
            <th>{snackTotal}</th>
            <th></th>
            <th></th>
          </tr>
          {
            todaysSnack.map(log => {
              return(
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
              )
            })
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Total</td>
            <td>{calTotal}</td>
            <td></td>
          </tr>
          <tr><td><Button onClick={() => setDayLog(dayLog + 1)}>Click for Yesterday</Button></td>
          <td><Button onClick={() => setDayLog(dayLog -1)}>Click for Tomorrow</Button></td></tr>
        </tfoot>
      </Table>
    </Container>
    <FoodEntryComponent token={props.token} isOpen={addModalOpen} onClose={() => setAddModalOpen(false)} fetchFoodTable={fetchFoodTable}/>
    </>
  );
  
};



export default FoodTableComponent;