import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts?.map((part, i) => (
        <Part part={part.name} exercises={part.exercises} key={i} />
      ))}
    </div>
  );
};

export default Content;
