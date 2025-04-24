const Button = ({ handleClick, title }) => {
  return (
    <button type="text" onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
