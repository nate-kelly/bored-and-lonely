// import './App.css';
import Form from './Form.js';
import Activities from './Activities.js'
import axios from 'axios';
import { useState } from 'react';

function App() {
  
  // API call on form submit
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
    }).catch(() => {
      alert('Sorry, there is an issue retriving your request. Please try again later.')
    });
  }

  // Capture radio input value
  const handleChange = (radioValue) => {
    setType(radioValue);
  }

  // State functions to update activity and type variables with API and form values
  const [ activity, setActivity ] = useState('');
  const [ type, setType ] = useState('');

  // Page content
  return (
    <div className="wrapper">
      <div className="contentBox">
        <header>
            <h1>Bored &amp; Lonely</h1>
            <h2>An activity generator for lethargic lockdowns</h2>
        </header>
        <main>
          <Form submit={handleSubmit} selection={handleChange}/>
          {
          activity !== ''
          ? <Activities results={activity} />
          : null
          }
        </main>
      </div>
    </div>
  );
}

export default App;