function MyButton({ text, style }) {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <button onClick={handleClick} style={{ ...style }}>
      {text}
    </button>
  );
}

export default MyButton;
