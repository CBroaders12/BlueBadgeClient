import React,  { useEffect } from 'react';
import {Navbar} from 'reactstrap';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import FoodEntryComponent from './FoodEntry';
import FoodTableComponent from './FoodTable';
import FoodUpdateComponent from './FoodUpdate';
import CalendarViewComponent from './CalendarView';
import NavigationComponent from './Navbar';

const FoodAppIndex = (props) => {

  useEffect(() => {

  })
  
  return (
    <BrowserRouter>
      <div>
        <Navbar>
        
        <Switch>
          <Route exact path="/food"><FoodEntryComponent/></Route>
          <Route exact path="/table/:id"><FoodTableComponent/></Route>
          <Route exact path="/food"><FoodUpdateComponent/></Route>
          {/* <Route path="/calendar/:id"><CalendarViewComponent/></Route> */}
        </Switch>
        </Navbar>
      </div>
    </BrowserRouter>
  );
};

export default FoodAppIndex;