import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

const SaveButton = (props) => {
  return (
    <button
      className='saveTask'
      onClick={props.save}>
      <FontAwesomeIcon icon={faSave} className='icon' />
        Save
    </button>
  )
}

export default SaveButton;