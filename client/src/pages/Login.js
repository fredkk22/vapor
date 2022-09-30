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
          <input type="email" class="form-control" id="email" placeholder="name@example.com" onChange={handleChange}/>
          <label for="email">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" class="form-control" id="pwd" placeholder="Password" onChange={handleChange}/>
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

{/* <div className="container my-1">
<Link to='/signup'>← Go to Signup</Link>

<h2>Login</h2>
<form onSubmit={handleFormSubmit}>
  <div className="flex-row space-between my-2">
    <label htmlFor="email">Email address:</label>
    <input
      placeholder="youremail@test.com"
      name="email"
      type="email"
      id="email"
      onChange={handleChange}
    />
  </div>
  <div className="flex-row space-between my-2">
    <label htmlFor="pwd">Password:</label>
    <input
      placeholder="******"
      name="password"
      type="password"
      id="pwd"
      onChange={handleChange}
    />
  </div>
  {error ? (
    <div>
      <p className="error-text">The provided credentials are incorrect</p>
    </div>
  ) : null}
  <div className="flex-row flex-end">
    <button type="submit">Submit</button>
  </div>
</form>
</div> */}