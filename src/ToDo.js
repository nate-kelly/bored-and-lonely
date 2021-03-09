const ToDo = ({ add, remove }) => {
  return (
    <section className='todoSection'>
      <ul>
        {
          add.map((item) => {
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