import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalBody, ModalHeader} from 'reactstrap'

const FoodEntryComponent = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [servings, setServings] = useState('');
  const [calories, setCalories] = useState('');
  const [date_eaten, setDate_eaten] = useState('');
  const [meal, setMeal] = useState('test');
  
 

  
  const postFood = (data) => {
    
    fetch('https://wd64-nutrition-app.herokuapp.com/food', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers ({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let baseUrl = 'https://api.edamam.com/api/food-database/v2/parser?ingr=';
    let apiId = '&app_id=bbd2cb26';
    let apiKey = '&app_key=a5f3a4c05e09c2955943a1cd6bb8396b';
    
    fetch(`${baseUrl}${name}${apiId}${apiKey}`)
    .then(response => response.json())
    .then(data => {
      let caloriesReturned = data.hints[0].food.nutrients.ENERC_KCAL * servings;
      let postData = {name: name, description: description, servings: servings, calories: caloriesReturned, date_eaten: date_eaten, meal: meal};
      postFood(postData);
      //setCarbs(data.hints[0].food.nutrients.CHOCDF) 
      //setFat(data.hints[0].food.nutrients.FAT) 
      //setProtein(data.hints[0].food.nutrients.PROCNT) 
    });
  }

  return(
    <Modal isOpen={true} className='Form'>
    <ModalHeader>Track Your Food!</ModalHeader>
    <ModalBody>
    <Form onSubmit={(e) => handleSubmit(e)}>
      <FormGroup>
        <Label htmlFor="name">Enter a Food:</Label>
        <Input type="text" name="text" id="name" onChange={(e) => setName(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="description">Enter a description:</Label>
        <Input type="text" name="text" id="description" onChange={(e) => setDescription(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="servings">Enter Servings:</Label>
        <Input type="integer" name="text" id="servings" onChange={(e) => setServings(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="date_eaten">Enter a date eaten (defaults to today):</Label>
        <Input type="date" name="date" id="date_eaten" pattern="[0-9]{8}" onChange={(e) => setDate_eaten(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="meal">Enter a meal ID:</Label>
        <Input type="select" name="meal" id="meal" onChange={(e) => setMeal(e.target.value)}>
          <option></option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
          </Input>
      </FormGroup>
      <Button style={{backgroundColor:'green'}}>Track It!</Button>
    </Form>
    </ModalBody>
    </Modal>
  );
};

export default FoodEntryComponent;