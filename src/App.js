import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  // Make a call to the Bored API
  const handleClick = () => {
    axios({
      method: 'GET',
      url: 'http://www.boredapi.com/api/activity/',
      dataResponse: 'JSON',
      params: {
        format: 'JSON'
      }
    }).then(response => {
      console.log(response.data.activity);
      setActivity(response.data.activity);
    })
  }

  // Store results of that call in state
  const [ activity, setActivity ] = useState('');
  console.log(useState());

  // Display results on the page based on user input

  // Questions
    // Do I need useEffect if just calling the API on click? Nope.
    // Should I store API call in a separate component? Nope.
    // Create one for each section of the page? For the results?
      // Form can be its own component, passing function using props to get user's selection
      // Displaying activities (results) can be its own component

  return (
    <div className="App">
      <header className="App-header">
        <h1>Project 3 placholder title</h1>
        <button onClick={handleClick}>Call the API</button>
        <p>{activity}</p>
      </header>
    </div>
  );
}

export default App;
