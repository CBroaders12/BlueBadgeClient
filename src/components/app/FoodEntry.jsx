import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

const FoodEntryComponent = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [servings, setServings] = useState('');
  const [calories, setCalories] = useState('');
  const [date_eaten, setDate_eaten] = useState('');
  const [meal, setMeal] = useState('');

  
  const handleSubmit =() => {
    let baseUrl = 'https://api.edamam.com/api/food-database/v2/parser';
    let apiId = '&app_id=bbd2cb26';
    let apiKey = '&app_key=a5f3a4c05e09c2955943a1cd6bb8396b';
    
    fetch(`${baseUrl}${name}${apiId}${apiKey}`)
    .then(response => response.json())
    .then(data => 
      setCalories(data.hints[0].food.nutrients.ENERC_KCAL) 
      //setCarbs(data.hints[0].food.nutrients.CHOCDF) 
      //setFat(data.hints[0].food.nutrients.FAT) 
      //setProtein(data.hints[0].food.nutrients.PROCNT) 
      );
  }

  return(
    <Form onSubmit={(e) => handleSubmit(e)}>
      <FormGroup>
        <Label htmlFor="name">Enter an ingredient:</Label>
        <Input type="text" name="text" id="name" onChange={(e) => setName(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="description">Enter a description:</Label>
        <Input type="text" name="text" id="description" onChange={(e) => setDescription(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="servings">Enter servings:</Label>
        <Input type="integer" name="text" id="servings" onChange={(e) => setServings(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="date_eaten">Enter a date eaten (defaults to today):</Label>
        <Input type="date" name="date" id="date_eaten" pattern="[0-9]{8}" onChange={(e) => setDate_eaten(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="meal">Enter a meal ID:</Label>
        <Input type="text" name="date" id="meal" onChange={(e) => setMeal(e.target.value)} />
      </FormGroup>
      <Button>Update</Button>
    </Form>
  );
};

export default FoodEntryComponent;