const ToDo = ({ todo, removeTask }) => {
  return (
    <section className='todoSection'>
      <p>Your list</p>
      <ul>
        {
          todo.map((item) => {
            return (
              <li key={item.key}>
                <button
                  onClick={() => removeTask(item.key)}
                  className="removeTask">
                  &#x2715;
                </button>
                {item.name}
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default ToDo;