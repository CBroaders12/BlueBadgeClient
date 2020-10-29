import React from 'react';
import {Table} from 'reactstrap';


const FoodTableComponent = (props) => {

  const fetchFoodLog = (food) => {
    
    fetch(`http://localhost:5200/food/`, {
      method: 'GET',
      headers: new Headers ({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    }).then((res) => res.text())
      .then(res => console.log(res))

      
  }

  const foodMapper = () => {
 
  }

  return(
    <>
    <h2>Food History</h2>
    <hr/>
    <Table striped>
      <thead>
        <tr>
        
        </tr>
      </thead>
      <tbody>
        {foodMapper()}
      </tbody>
    </Table>
    </>
  );
};



export default FoodTableComponent;