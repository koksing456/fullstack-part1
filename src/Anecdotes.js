import { useState } from "react";
import Button from "./components/Button";
import Title from "./components/Title";
import Display from "./components/Display";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleRandomAnecdote = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNum);
  };

  const handleVote = () => {
    const points_copy = [...votes];
    points_copy[selected] += 1;

    setVotes(points_copy);
  };

  const mostVotes = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <Title titleText="Anecdote of the day" />
      <Display anecdotes={anecdotes[selected]} numOfVotes={votes[selected]} />
      <Button label="next anecdote" onClick={handleRandomAnecdote} />
      <Button label="vote" onClick={handleVote} />
      <Title titleText="Anecdote with most vote" />
      <Display anecdotes={anecdotes[mostVotes]} numOfVotes={votes[mostVotes]} />
    </div>
  );
};

export default App;
