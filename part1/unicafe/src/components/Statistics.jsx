import StatisticLine from "./StatisticLine";

const StatisticContainer = ({ good, bad, neutral }) => {
  if (good + bad + neutral === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <>
      <table>
        <tbody>
          <StatisticLine text={"Good"} value={good} />
          <StatisticLine text={"Neutral"} value={neutral} />
          <StatisticLine text={"Bad"} value={bad} />
          <StatisticLine text={"All"} value={good + neutral + bad} />
          <StatisticLine
            text={"Average"}
            value={
              good + neutral + bad === 0
                ? 0
                : (good - bad) / (good + neutral + bad)
            }
          />
          <StatisticLine
            text={"Positive"}
            value={
              good + neutral + bad === 0
                ? "0 %"
                : (good / (good + neutral + bad)) * 100 + " %"
            }
          />
        </tbody>
      </table>
    </>
  );
};

export default StatisticContainer;
