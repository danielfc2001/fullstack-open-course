import { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <main>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} title={"Good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} title={"Neutral"} />
      <Button handleClick={() => setBad(bad + 1)} title={"Bad"} />
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </main>
  );
}

export default App;
