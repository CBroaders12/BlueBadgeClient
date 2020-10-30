import React,  {  } from 'react';
import {  } from 'reactstrap';

import FoodEntryComponent from './FoodEntry';
import FoodTableComponent from './FoodTable';
import FoodUpdateComponent from './FoodUpdate';
import CalendarViewComponent from './CalendarView';

const FoodAppIndex = (props) => {

  return(
    <div>
      <h2>Application Main Page</h2>
      <FoodEntryComponent token={props.token}/>
      <FoodTableComponent token={props.token}/>
      <FoodUpdateComponent token={props.token}/>
      <CalendarViewComponent token={props.token}/>
    </div>
  );
};

export default FoodAppIndex;