import React,  { useState } from 'react';
import { Form, Button, Input, FormGroup, Label } from 'reactstrap';

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
        
        fetch('http://localhost:5200/register', {
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
          .then(() => {
            console.log('user is registerd');
          })
          .catch(error => console.log(error));
      }else{
        alert('Passwords MUST match!');
      }
    }
  };

  return(
    <Form className='authForm' id='registerForm' onSubmit={UserRegistration}>
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
      </FormGroup>
      <FormGroup>
        <Label htmlFor='registerConfirmPassword'>Confirm Password:</Label>
        <Input id='registerConfirmPassword' type='password' name='registerConfirmPassword' onChange={passwordConfirmInputChange}></Input>
      </FormGroup>
      <Button>Register</Button>
    </Form>
  );
};

export default RegisterComponent;