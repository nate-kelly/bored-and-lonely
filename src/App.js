import Form from './Form.js';
import Activities from './Activities.js';
import ToDo from './ToDo.js';
import axios from 'axios';
import './styles.css';
import firebase from './firebase.js';
import { useState, useEffect } from 'react';

function App() {
  // Initialize state
  const [activity, setActivity] = useState('');
  const [type, setType] = useState('');
  const [todo, setTodo] = useState([]);

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
      setActivity(response.data.activity);
    }).catch(() => {
      alert('Sorry, there was an error. Please try again later.')
    });
  }

  // Capture radio input value
  const handleChange = (radioValue) => {
    setType(radioValue);
  }

  // Save activity and push to database
  const handleClick = () => {
    dbRef.push(activity);
  }

  // Remove saved activity from list and database
  const removeTask = (taskId) => {
    dbRef.child(taskId).remove();
  }

  // Capture change in database and display on page
  useEffect(() => {
    dbRef.on('value', (response) => {
      const newState = [];
      const data = response.val();
      for (let uniqueKey in data) {
        newState.push({ key: uniqueKey, name: data[uniqueKey] });
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
          <Form handleSubmit={handleSubmit} handleChange={handleChange} />
          {
            activity !== ''
              ? <Activities activity={activity} handleClick={handleClick} />
              : null
          }
          {
            todo.length !== 0
              ? <ToDo todo={todo} removeTask={removeTask} />
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