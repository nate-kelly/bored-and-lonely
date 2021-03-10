import Form from './Form.js';
import Activities from './Activities.js';
import ToDo from './ToDo.js';
import SaveButton from './SaveButton.js';
import axios from 'axios';
import './styles.css';
import firebase from './firebase.js';
import { useState, useEffect } from 'react';

function App() {
  // State to store/update activity, type and todo variables with API and form values
  const [ activity, setActivity ] = useState('');
  const [ type, setType ] = useState('');
  const [ todo, setTodo ] = useState([]);

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
      alert('Sorry, there is an issue retriving your request. Please try again later.')
    });
  }

  // Capture radio input value
  const handleChange = (radioValue) => {
    setType(radioValue);
  }

  // On button click, taking activity state and pushing to database
  const handleClick = () => {
    // Reference db
    const dbRef = firebase.database().ref();
    // Push activity state to db
    dbRef.push(activity);
  }

  const removeTask = (taskId) => {
    const dbRef = firebase.database().ref();
    dbRef.child(taskId).remove();
  }

  // Capture change in database and display on page
    // Listening to a change and converting to array and updating state (useEffect only runs on page load)
  useEffect(() => {
    const dbRef = firebase.database().ref();
    // Event listener that fires on change in database
    dbRef.on('value', (response) => {
      // Variable to store new state
      const newState = [];
      // Variable to store response from our query to Firebase
      const data = response.val();
      // Access activity name through loop
      for (let key in data) {
        newState.push({key: key, name: data[key]});
      }
      setTodo(newState);
    })
  }, []);

  // Page content
  return (
    <div className='wrapper'>
      <div className='contentBox'>
        <header>
            <h1>Bored &amp; Lonely</h1>
            <h2>An activity generator for lethargic lockdowns</h2>
        </header>
        <main>
          <Form submit={handleSubmit} selection={handleChange} />
          {
          activity !== ''
          ? <>
              <Activities results={activity} />
              <SaveButton save={handleClick} />
            </>
          : null
          }
          {
          todo.length !== 0
          ?
          <ToDo add={todo} remove={removeTask} />
          : null
          }
        </main>
        <footer>
          <p>Created at <a href='https://www.junocollege.com' target='_blank' rel='noreferrer'>Juno College</a></p>
        </footer>
      </div>
    </div>
  );
}

export default App;