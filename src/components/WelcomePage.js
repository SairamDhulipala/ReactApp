import React, { useState } from 'react';
import './WelcomePage.css';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const [selectedOption, setSelectedOption] = useState('a');
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/Tnc/${selectedOption}`);
  };

  return (
    <body class="welcome">
  <div className="container2">
    <div className="box welcome">
    <div className="unique-title">Choose the Terms and Conditions</div>
      <center>
        <form onSubmit={handleSubmit}>
          <div className="options welcome">
            <select id="mdFile" name="mdFile" value={selectedOption} onChange={handleOptionChange}>
              <option value="a">IBM</option>
              <option value="b">Amazon</option>
              <option value="c">Apple</option>
            </select>
          </div>
          <button type="submit" className="welcome">Proceed</button>
        </form>
      </center>
    </div>
  </div>
</body>

  );
};

export default WelcomePage;
