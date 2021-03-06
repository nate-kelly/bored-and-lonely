// import './App.css';
import Form from './Form.js';
import Activities from './Activities.js'
import axios from 'axios';
import { useState } from 'react';

function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: 'GET',
      url: `http://www.boredapi.com/api/activity?type=${type}`,
      dataResponse: 'JSON',
      params: {
        format: 'JSON'
      }
    }).then(response => {
      setActivity(response.data.activity);
    })
  }
  
  const handleChange = (radioValue) => {
    setType(radioValue);
  }

  const [ activity, setActivity ] = useState('');
  const [ type, setType ] = useState('');

  return (
      <div className="wrapper">
        <header>
            <h1>Bored &amp; Lonely</h1>
            <h2>An activity generator for lethargic lockdowns</h2>
        </header>
        <Form showResults={handleSubmit} handleChange={handleChange}/>
        <Activities results={activity} />
    </div>
  );
}

export default App;

// To Do:
  // Explore other filter parameters
