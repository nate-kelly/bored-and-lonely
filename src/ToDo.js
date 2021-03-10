const ToDo = ({ todo, removeTask }) => {
  return (
    <section className='todoSection'>
      <p>Your list</p>
      <ul>
        {
          todo.map((item) => {
            return (
              <li key={item.key}>
                {item.name}
                <button
                  onClick={() => removeTask(item.key)}
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