const Hello = (props) => {
    const bornYear = () => {
        let yearNow = new Date().getFullYear()
        return yearNow - props.age
    }

    return (
      <div>
        <p>
          Hello {props.name}, you are {props.age} years old and born in {bornYear()} 
        </p>
      </div>
    )
  }
  
  const HelloApp = () => {
    const name = 'Peter'
    const age = 10
  
    return (
      <div>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26 + 10} />
        <Hello name={name} age={age} />
      </div>
    )
  }

  export default HelloApp