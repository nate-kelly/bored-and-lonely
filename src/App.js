import Form from './Form.js';
import Activities from './Activities.js';
import ToDo from './ToDo.js';
import axios from 'axios';
import './styles.css';
import firebase from './firebase.js';
import { useState, useEffect } from 'react';

function App() {
  // Initialize state
  const [activity, setActivity] = useState(''); // Tracks/updates the returned API value
  const [type, setType] = useState(''); // Tracks/updates the selected category of activity
  const [todo, setTodo] = useState([]); // Tracks/updates the saved activity

  // Firebase reference
  const dbRef = firebase.database().ref();

  // API call on form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: 'GET',
      url: `https://www.boredapi.com/api/activity?type=${type}`,
      dataResponse: 'JSON',
      params: {
        format: 'JSON'
      }
    }).then(response => {
      setActivity(response.data.activity); // Set activity state value
    }).catch(() => {
      alert('Sorry, there is an issue with our API. Please try again later.')
    });
  }

  // Capture radio input value and update type state
  const handleChange = (radioValue) => {
    setType(radioValue);
  }

  // On save button click, taking activity state and pushing to database
  const handleClick = () => {
    dbRef.push(activity);
  }

  // Remove saved activity from to-do list and database
  const removeTask = (taskId) => {
    dbRef.child(taskId).remove();
  }

  // Capture change in database and display on page
  // When you want something to happen on the page that is not directly related to state
  useEffect(() => {
    // Event listener that fires on change in database (response is just the current data)
    dbRef.on('value', (response) => {
      // Variable to store new state
      const newState = [];
      // Variable to store response from our query to Firebase
      const data = response.val(); // Object containing key and activity name, from Firebase
      // Access activity name through for-in loop
      for (let uniqueKey in data) {
        newState.push({ key: uniqueKey, name: data[uniqueKey] }); // Creating array of objects with key and name, data[uniqueKey] finds the name with that unique key
      }
      setTodo(newState);
    })
  }, [dbRef]);

  // Page content
  return (
    <div className='wrapper'>
      <div className='contentBox'>
        <header>
          <h1>Bored &amp; Lonely</h1>
          <h2>An activity generator for lethargic lockdowns</h2>
        </header>
        <main>
          <Form submit={handleSubmit} handleChange={handleChange} />
          {
            activity !== ''
              ? <Activities results={activity} save={handleClick} />
              : null
          }
          {
            todo.length !== 0
              ? <ToDo savedItem={todo} remove={removeTask} />
              : null
          }
        </main>
        <footer>
          <p>Created by Nathan Kelly at <a href='https://www.junocollege.com' target='_blank' rel='noreferrer'>Juno College</a>. Powered by <a href='https://www.boredapi.com/' target='_blank' rel='noreferrer'>The Bored API</a>.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;