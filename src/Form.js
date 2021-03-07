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
        <div className="radioSelect">
          <input type="radio" name="activityType" id="recreational" onChange={(event) => selection(event.target.value)} value="recreational" required />
          <label htmlFor="recreational">Recreational</label>
        </div>
        <div className="radioSelect">
          <input type="radio" name="activityType" id="education" onChange={(event) => selection(event.target.value)} value="education" />
          <label htmlFor="education">Education</label>
        </div>
        <div className="radioSelect">
          <input type="radio" name="activityType" id="cooking" onChange={(event) => selection(event.target.value)} value="cooking" />
          <label htmlFor="cooking">Cooking</label>
        </div>
        <div className="radioSelect">
          <input type="radio" name="activityType" id="relaxation" onChange={(event) => selection(event.target.value)} value="relaxation" />
          <label htmlFor="relaxation">Relaxation</label>
        </div>
        <div className="radioSelect">
          <input type="radio" name="activityType" id="busywork" onChange={(event) => selection(event.target.value)} value="busywork" />
          <label htmlFor="busywork">Busywork</label>
        </div>
        <div className="radioSelect">
          <input type="radio" name="activityType" id="music" onChange={(event) => selection(event.target.value)} value="music" />
          <label htmlFor="music">Music</label>
        </div>
        <div className="radioSelect">
          <input type="radio" name="activityType" id="diy" onChange={(event) => selection(event.target.value)} value="diy" />
          <label htmlFor="diy">DIY</label>
        </div>
        <div className="buttonSelect">
          <button>Give me something to do!</button>
        </div>
      </form>
    </section>
  )
}

export default Form;