// import React, {useState} from 'react';
// import {Card, CardBody, CardTitle, CardText, Button} from 'reactstrap';
// import FoodEntryComponent from './FoodEntry';
// import FoodUpdateComponent from './FoodUpdate';

// const CalendarViewComponent = (props) => {

//   const [logs, setLogs] = useState([]);

//   fetch('https://wd64-nutrition-app.herokuapp.com/food', {
//     headers: {
//       "Authorization": props.token}
//   }).then(response => response.json())
//   .then(data => setLogs(data))
//   .catch(error => console.log(error));
 
//   return(
//     <div id="calendarView">
//       {logs.length > 0 
//       ? logs.map(item => {
//           return (
//             <Card>
//               <CardBody>
//                 <CardTitle>{item.date}</CardTitle>
//                   <CardText>
//                     Ingredient:{item.ingredient}<br />
//                     Description:{item.description}<br />
//                     Servings:{item.serving}<br />
//                     Calories:{item.calories}
//                     Meal ID:{item.meal}
//                   </CardText>
//                 <Button onClick={FoodUpdateComponent}>Edit Entry</Button>
//               </CardBody>
//             </Card>
//           )
//         })
//       : (<h1>You have no logs</h1>)}
//     </div>
//   );
// };

// export default CalendarViewComponent;