const Form = ({submit, selection}) => {
  // const categories = ['Recreational', 'Education', 'Cooking', 'Relaxation', 'Busywork', 'Music', 'DIY'];
  return (
    <section className="formSection">
      <form onSubmit={submit}>
        <h3>Choose a category:</h3>
        {/* {
        categories.map((type) => {
          return (
            <div>
              <label htmlFor={type}>{type}</label>
              <input type="radio" name="activityType" id={type} onChange={(event) => selection(event.target.value)} value={type} required />
            </div>
          )
        })
        } */}
        <div>
          <label htmlFor="recreational">Recreational</label>
          <input type="radio" name="activityType" id="recreational" onChange={(event) => selection(event.target.value)} value="recreational" required />
        </div>
        <div>
          <label htmlFor="education">Education</label>
          <input type="radio" name="activityType" id="education" onChange={(event) => selection(event.target.value)} value="education" />
        </div>
        <div>
          <label htmlFor="cooking">Cooking</label>
          <input type="radio" name="activityType" id="cooking" onChange={(event) => selection(event.target.value)} value="cooking" />
        </div>
        <div>
          <label htmlFor="relaxation">Relaxation</label>
          <input type="radio" name="activityType" id="relaxation" onChange={(event) => selection(event.target.value)} value="relaxation" />
        </div>
        <div>
          <label htmlFor="busywork">Busywork</label>
          <input type="radio" name="activityType" id="busywork" onChange={(event) => selection(event.target.value)} value="busywork" />
        </div>
        <div>
          <label htmlFor="music">Music</label>
          <input type="radio" name="activityType" id="music" onChange={(event) => selection(event.target.value)} value="music" />
        </div>
        <div>
          <label htmlFor="diy">DIY</label>
          <input type="radio" name="activityType" id="diy" onChange={(event) => selection(event.target.value)} value="diy" />
        </div>
        <button>Give me something to do!</button>
      </form>
    </section>
  )
}

export default Form;