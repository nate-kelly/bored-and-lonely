const ToDo = ({ savedItem, remove }) => {
  return (
    <section className='todoSection'>
      <p>Your list</p>
      <ul>
        {
          savedItem.map((item) => {
            return (
              <li key={item.key}>
                {item.name}
                <button
                  onClick={() => remove(item.key)}
                  className="removeTask">&#x2715;
                </button>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default ToDo;