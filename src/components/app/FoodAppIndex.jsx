import React,  { useEffect } from 'react';
import {  } from 'reactstrap';

import FoodEntryComponent from './FoodEntry';
import FoodTableComponent from './FoodTable';
import FoodUpdateComponent from './FoodUpdate';
import CalendarViewComponent from './CalendarView';
import Navbar from './Navbar';

const FoodAppIndex = (props) => {

  useEffect(() => {

  })
  
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/entry/:id" component={FoodEntryComponent} token={props.token} />
          <Route path="/table/:id" component={FoodTableComponent} token={props.token} />
          <Route path="/update/:id" component={FoodUpdateComponent} token={props.token} />
          <Route path="/calendar/:id" component={CalendarViewComponent} token={props.token} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default FoodAppIndex;