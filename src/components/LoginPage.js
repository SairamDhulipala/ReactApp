import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    username: '',
    password: '',
    isLoggedIn: false
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = state;
    if (username && password) {
      // Perform login logic here
      // You can set the isLoggedIn state to true upon successful login
      setState((prevState) => ({ ...prevState, isLoggedIn: true }));
      // Navigate to the welcome page
      navigate('/welcome');
    } else {
      alert('Please fill in both username and password fields.');
    }
  };

  if (state.isLoggedIn) {
    navigate('/welcome');
  }

  return (
    <body class="login-page-body">
    <div className="border login-page">
      <h2 className="login-title">Login</h2>
      <h4>Please sign in to continue</h4>
      <div className="buttonsalign login-input-group">
        <input
          type="text"
          className="usernamebox login-input"
          placeholder="Enter Username"
          name="username"
          value={state.username}
          onChange={handleInputChange}
          required
        />
        <br />
        <input
          type="password"
          className="pwbox login-input"
          placeholder="Enter password"
          name="password"
          value={state.password}
          onChange={handleInputChange}
          required
        />
        <br />
      </div>
      <button
        type="submit"
        className="btn login-button"
        onClick={handleFormSubmit}
        id="btnpush"
      >
        <b>Login</b>
      </button>
      <h4>Don't have an account?</h4>
      <Link to="/register" className="register-link">Register</Link>
    </div>
    </body>
  );
}

export default LoginPage;
