const Hello = ({ name, number}) => {
  return <p>Hello {name}, {number}</p>;
};

const App = () => {
  const num1 = 1;
  const num2 = 2;
  return (
    <>
      <Hello name="Kok Sing" number={num1} />
      <Hello name="Joann" number={num1} />
      <Hello name="GUG" number={num1} />

      <p>
        {num1} + {num2} = {num1 + num2}
      </p>
    </>
  );
};

export default App;
