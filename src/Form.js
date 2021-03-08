// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRunning, faGraduationCap, faUtensils, faCouch, faHandsWash, faGuitar, faHammer } from '@fortawesome/free-solid-svg-icons';

const Form = ({ submit, selection }) => {
  const categories = ['recreational', 'education', 'cooking', 'relaxation', 'busywork', 'music', 'diy'];
  return (
    <section className='formSection'>
      <form onSubmit={submit}>
        <h3>Choose a category:</h3>
        {
          categories.map((type, index) => {
            return (
              <div className='radioSelect' key={index}>
                <input
                  type='radio'
                  name='activityType'
                  id={type}
                  onChange={(event) => selection(event.target.value)}
                  value={type}
                  required
                />
                <label htmlFor={type}>{type}</label>
              </div>
            )
          })
        }
        <button>Give me something to do!</button>
      </form>
    </section>
  )
}

export default Form;

// <div className='radioSelect'>
//           <input type='radio' name='activityType' id='recreational' onChange={(event) => selection(event.target.value)} value='recreational' required />
//           <label htmlFor='recreational'>Recreational</label>
//           <FontAwesomeIcon icon={faRunning} className='icon' />
//         </div>
//         <div className='radioSelect'>
//           <input type='radio' name='activityType' id='education' onChange={(event) => selection(event.target.value)} value='education' />
//           <label htmlFor='education'>Education</label>
//           <FontAwesomeIcon icon={faGraduationCap} className='icon' />
//         </div>
//         <div className='radioSelect'>
//           <input type='radio' name='activityType' id='cooking' onChange={(event) => selection(event.target.value)} value='cooking' />
//           <label htmlFor='cooking'>Cooking</label>
//           <FontAwesomeIcon icon={faUtensils} className='icon' />
//         </div>
//         <div className='radioSelect'>
//           <input type='radio' name='activityType' id='relaxation' onChange={(event) => selection(event.target.value)} value='relaxation' />
//           <label htmlFor='relaxation'>Relaxation</label>
//           <FontAwesomeIcon icon={faCouch} className='icon' />
//         </div>
//         <div className='radioSelect'>
//           <input type='radio' name='activityType' id='busywork' onChange={(event) => selection(event.target.value)} value='busywork' />
//           <label htmlFor='busywork'>Busywork</label>
//           <FontAwesomeIcon icon={faHandsWash} className='icon' />
//         </div>
//         <div className='radioSelect'>
//           <input type='radio' name='activityType' id='music' onChange={(event) => selection(event.target.value)} value='music' />
//           <label htmlFor='music'>Music</label>
//           <FontAwesomeIcon icon={faGuitar} className='icon' />
//         </div> 
//         <div className='radioSelect'>
//           <input type='radio' name='activityType' id='diy' onChange={(event) => selection(event.target.value)} value='diy' />
//           <label htmlFor='diy'>DIY</label>
//           <FontAwesomeIcon icon={faHammer} className='icon' />
//         </div>