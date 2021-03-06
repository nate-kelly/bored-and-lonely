const Form = ({handleChange, showResults}) => {
  return (
    <form onSubmit={showResults}>
      <p>Choose an activity type:</p>
      <div>
        <label htmlFor="recreational">Recreational</label>
        <input type="radio" name="activityType" id="recreational" onChange={(event) => handleChange(event.target.value)} value="recreational" />
      </div>
      <div>
        <label htmlFor="education">Education</label>
        <input type="radio" name="activityType" id="education" onChange={(event) => handleChange(event.target.value)} value="education" />
      </div>
      <div>
        <label htmlFor="cooking">Cooking</label>
        <input type="radio" name="activityType" id="cooking" onChange={(event) => handleChange(event.target.value)} value="cooking" />
      </div>
      <div>
        <label htmlFor="relaxation">Relaxation</label>
        <input type="radio" name="activityType" id="relaxation" onChange={(event) => handleChange(event.target.value)} value="relaxation" />
      </div>
      <div>
        <label htmlFor="busywork">Busywork</label>
        <input type="radio" name="activityType" id="busywork" onChange={(event) => handleChange(event.target.value)} value="busywork" />
      </div>
      <div>
        <label htmlFor="music">Music</label>
        <input type="radio" name="activityType" id="music" onChange={(event) => handleChange(event.target.value)} value="music" />
      </div>
      <div>
        <label htmlFor="diy">DIY</label>
        <input type="radio" name="activityType" id="diy" onChange={(event) => handleChange(event.target.value)} value="diy" />
      </div>
      <button>Give me something to do!</button>
    </form>
  )
}

export default Form;