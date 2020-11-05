import React,  { useState } from 'react';
import { Form, Button, Input, FormGroup, Label, Container } from 'reactstrap';
import {Link} from 'react-router-dom';
import NavigationComponent from '../app/Navbar';

const RegisterComponent = (props) => {

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const userInputChange = (event) => setUserName(event.target.value);
  const emailInputChange = (event) => setEmail(event.target.value);
  const passwordInputChange = (event) => setPassword(event.target.value);
  const passwordConfirmInputChange = (event) => setPasswordConfirm(event.target.value);

  const UserRegistration = (event) => {
    event.preventDefault();

    if(username && email && password) {
      if(password === passwordConfirm) {
        
        fetch('https://wd64-nutrition-app.herokuapp.com/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            username: username,
            email: email,
            password: password
          })

        }).then(response => response.json())
          .then((body) => {
            props.authenticateUser(body.token);
            console.log('user is registered');
          })
          .catch(error => console.log(error));
      }else{
        alert('Passwords MUST match!');
      }
    }
  };

  return(
    <>
    <NavigationComponent/>
    <Container fluid="md" className="d-flex align-content-center" style={{height: '100vh'}}>
      <Form className='Form' id='registerForm' onSubmit={UserRegistration}>
        <h4>Registration</h4>
        <FormGroup>
          <Label htmlFor='registerUserName'>Username:</Label>
          <Input id='registerUserName' type='text' name='registerUserName' onChange={userInputChange}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='registerEmail'>Email:</Label>
          <Input id='registerEmail' type='email' name='registerEmail' onChange={emailInputChange}></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='registerPassword'>Password:</Label>
          <Input id='registerPassword' type='password' name='registerPassword' onChange={passwordInputChange}></Input>
          {password.length && password.length < 5 ? <span>Password must be 5 characters</span> : null}
        </FormGroup>
        <FormGroup>
          <Label htmlFor='registerConfirmPassword'>Confirm Password:</Label>
          <Input id='registerConfirmPassword' type='password' name='registerConfirmPassword' onChange={passwordConfirmInputChange}></Input>
        </FormGroup>
        <Button disabled={!username || !password || !email || !passwordConfirm || password.length < 5 } style={{backgroundColor:'green'}}>Register</Button>
        <p onClick={props.switchAuth}>Already have an account? Click here to <Link to='login'>Login</Link></p>
      </Form>
    </Container>
    </>
  );
};

export default RegisterComponent;