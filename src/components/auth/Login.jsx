import React,  {useState} from 'react';
import { Form, Label, FormGroup, Button, Input, Container } from 'reactstrap';
import {Link} from 'react-router-dom';
import NavigationComponent from '../app/Navbar';

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
    <>
    <NavigationComponent/>
    <Container fluid="md" id='Form' className="d-flex align-content-center" style={{height: '100vh'}}>
    <Form id='loginForm' className='Form' onSubmit={LoginSubmit}>
      <h4>Login</h4>
      <FormGroup>
        <Label htmlFor='username'>Username:</Label>
        <Input onChange={userNameChange} value={username} id='username' type='text' name='text'></Input>
        {username.length && username.length < 4 ? <span>Must be 4 or more characters</span> : null}
      </FormGroup>
      <FormGroup>
        <Label htmlFor='password'>Password:</Label>
        <Input onChange={passwordChange} value={password} id='password' type='password' name='password'></Input>
        {password.length && password.length < 5 ? <span>Password must be 5 or more characters</span> : null}
      </FormGroup>
      <Button disabled={!username || !password || username.length < 4} style={{backgroundColor:'green'}}>Login</Button>
      <p onClick={props.switchAuth}>Need to create an account? Click here to <Link to='/register'>Register</Link></p>
    </Form>
    </Container>
    </>

  );
};

export default LoginComponent;