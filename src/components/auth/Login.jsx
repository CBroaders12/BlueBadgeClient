import React,  {useState} from 'react';
import { Form, Label, FormGroup, Button, Input } from 'reactstrap';

const LoginComponent = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const userNameChange = (event) => {
    setUsername(event.target.value)
  };

  const passwordChange = (event) => {
    setPassword(event.target.value)
  };

  const LoginSubmit = (event) => {
    event.preventDefault();
    
    if(username && password) {
      fetch('https://wd64-nutrition-app.herokuapp.com/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'},

        body: JSON.stringify({
          username: username,
          password: password}),

      }).then(response => response.json())
      .then((body) => props.authenticateUser(body.token))
      .catch((error) => console.log(error));
    }
  };

  return(
    <Form id='loginForm' className='Form' onSubmit={LoginSubmit}>
      <h4>Login</h4>
      <FormGroup>
        <Label htmlFor='username'>Username:</Label>
        <Input onChange={userNameChange} value={username} id='username' type='text' name='text'></Input>
      </FormGroup>
      <FormGroup>
        <Label htmlFor='password'>Password:</Label>
        <Input onChange={passwordChange} value={password} id='password' type='password' name='password'></Input>
      </FormGroup>
      <Button>Login</Button>
    </Form>
  );
};

export default LoginComponent;