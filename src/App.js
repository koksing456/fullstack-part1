const Header = ({courseName}) => {
  return <h1>{courseName}</h1>;
};

const Content = ({parts}) => {
  return (
    parts.map(p => <p key={p.name}>
      {p.name} {p.exercises}
    </p>)
  );
};

const Total = ({parts}) => {
  let total = 0
  parts.forEach(p => {
    total = total + p.exercises
  })
  return <p>Number of exercises {total}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header courseName={course} />
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  );
};

export default App;
