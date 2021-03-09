const ToDo = ({save, remove}) => {
  return (
    <section className='todoSection'>
      <ul>
        {
          save.map((item) => {
            return (
              <li key={item.key}>{item.name}
                <button
                  onClick={() => remove(item.key)}
                  className="removeTask">&#x2715;</button>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default ToDo;