// import './App.css';
import Form from './Form.js';
import axios from 'axios';
import { useState } from 'react';

function App() {
  // Make a call to the API on form submit
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

  // Store results of that call in state
  const [ activity, setActivity ] = useState('');
  const [ type, setType ] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bored &amp; Lonely</h1>
        <p>An activity generator for lethargic lockdowns</p>
        <Form showResults={handleSubmit} handleChange={handleChange}/>
        <p>{activity}</p>
      </header>
    </div>
  );
}

export default App;

// To Do:
  // Create activities component and display results on page based on user selection
