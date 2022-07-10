import { useState } from "react";

const Title = ({ titleText }) => {
  return <h1>{titleText}</h1>;
};

const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

const Result = ({ feedbackText, number }) => {
  return (
    <tbody>
      <tr>
        <td>{feedbackText}</td>
        <td>{number}</td>
      </tr>
    </tbody>
  );
};

const Statistics = (props) => {
  const { good, bad, neutral, goodText, badText, neutralText } = props;

  const totalClick = good + bad + neutral;

  const averageClick = () => {
    const goodScore = 1;
    const badScore = -1;

    return good * goodScore + (bad * badScore) / 3;
  };

  const determinePositivePercentage =
    String((good / (neutral + bad)) * 100) + "%";

  if (totalClick === 0) {
    return (
      <>
        <Title titleText="statistics" />
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <Title titleText="statistics" />
      <table>
        <Result feedbackText={goodText} number={good} />
        <Result feedbackText={neutralText} number={neutral} />
        <Result feedbackText={badText} number={bad} />
        <Result feedbackText="all" number={totalClick} />
        <Result feedbackText="average" number={averageClick()} />
        <Result feedbackText="positive" number={determinePositivePercentage} />
      </table>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodText = "good";
  const neutralText = "neutral";
  const badText = "bad";

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <Title titleText="give feedback" />
      <Button label={goodText} onClick={handleGoodClick} />
      <Button label={neutralText} onClick={handleNeutralClick} />
      <Button label={badText} onClick={handleBadClick} />

      <Statistics
        goodText={goodText}
        neutralText={neutralText}
        badText={badText}
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </>
  );
};

export default App;
