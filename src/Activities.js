import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

const Activities = ({ results, save }) => {
  return (
    <section className='resultSection'>
      <h3>{results}</h3>
      <button
        className='saveTask'
        onClick={save}>
        <FontAwesomeIcon icon={faSave} className='icon' />
        Save for later
    </button>
    </section>
  )
}

export default Activities;