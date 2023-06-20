import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterPage.css';

function RegisterPage() {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    username: '',
    password: '',
    email: '',
    name: '',
    gender: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password, email, name, gender } = state;
    // Perform registration logic here
    // You can handle the registration process and any necessary validations
    alert('Registration successful!');
    // Redirect to the login page
    navigate('/');
  };

  return (
    <body className='register-body'>
    <div className="border">
      <h2 className="login">Register</h2>
      <h4>Please fill in all the details</h4>
      <div className="buttonsalign">
        <input
          type="text"
          className="usernamebox"
          placeholder="Enter Username"
          name="username"
          value={state.username}
          onChange={handleInputChange}
          required
        />
        <br />
        <input
          type="text"
          className="namebox"
          placeholder="Enter Name"
          name="name"
          value={state.name}
          onChange={handleInputChange}
          required
        />
        <br />
        <input
          type="email"
          className="ebox"
          placeholder="E-mail"
          name="email"
          value={state.email}
          onChange={handleInputChange}
          required
        />
        <br />
        <h4>Select Gender</h4>
        <div className="rads">
          Male
          <input
            type="radio"
            name="gender"
            id="m"
            value="male"
            onChange={handleInputChange}
            required
          />
          Female
          <input
            type="radio"
            name="gender"
            id="f"
            value="female"
            onChange={handleInputChange}
            required
          />
          Other
          <input
            type="radio"
            name="gender"
            id="o"
            value="other"
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <button type="submit" className="btn register-button" onClick={handleFormSubmit} id="btnpush">
        <b>Register</b>
      </button>
      <br />
      <b>
        Already a user? <Link to="/">Login</Link>
      </b>
    </div>
    </body>
  );
}

export default RegisterPage;
