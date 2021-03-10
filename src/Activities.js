import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

const Activities = ({ activity, handleClick }) => {
  return (
    <section className='resultSection'>
      <h3>{activity}</h3>
      <button
        className='saveTask'
        onClick={handleClick}>
        <FontAwesomeIcon icon={faSave} className='icon' />
          Save for later
      </button>
    </section>
  )
}

export default Activities;