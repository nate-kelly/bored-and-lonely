// import './App.css';
import Form from './Form.js';
import Activities from './Activities.js'
import axios from 'axios';
import './styles.css';
// import firebase from './firebase.js';
import { useState } from 'react';

function App() {
  // State to store/update activity and type variables with API and form values
  const [ activity, setActivity ] = useState('');
  const [ type, setType ] = useState('');

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

  // Firesbase data
  // const [ tasks, setTasks ] = useState([]);
  // useEffect(() => {
  //   // Reference to database
  //   const dbRef = firebase.database().ref();
  //   // Event listener that fires on change in database
  //   dbRef.on('value', (response) => {
  //     // Variable to store new state
  //     const newState = [];
  //     // Variable to store response from our query to Firebase
  //     const data = response.val();
  //     // Access activity name through loop
  //     for (let key in data) {
  //       newState.push(data[key]);
  //     }
  //     setTasks(newState);
  //   })
  // }, []);

  // On button click, push to database with activity as value

  // Page content
  return (
    <div className="wrapper">
      <div className="contentBox">
        <header>
            <h1>Bored &amp; Lonely</h1>
            <h2>An activity generator for lethargic lockdowns</h2>
        </header>
        <main>
          <Form submit={handleSubmit} selection={handleChange} />
          {/* Firebase experiment */}
          {/* {
          tasks.map((item) => {
            return (
              <p>{item}</p>
            )
          })
          }
          <button>Save task</button> */}
          {
          activity !== ''
          ? <Activities results={activity} />
          : null
          }
        </main>
        <footer>
          <p>Created at <a href="https://www.junocollege.com" target="_blank" rel="noreferrer">Juno College</a></p>
        </footer>
      </div>
    </div>
  );
}

export default App;