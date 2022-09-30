import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (

<div className="form-signin w-50 m-auto">
      <form onSubmit={handleFormSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please Log in</h1>
    
        <div className="form-floating">
          <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" onChange={handleChange}/>
          <label for="email">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" name="Email" id="pwd" placeholder="Password" onChange={handleChange}/>
          <label for="pwd">Password</label>
        </div>
    
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Log in</button>
      </form>
      <Link to='/signup'>If you don't have an account, Sign up!</Link>
    </div>

    
   
  );
}

export default Login;