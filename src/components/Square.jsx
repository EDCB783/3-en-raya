export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      <img
        src={
          children == null
            ? ""
            : children == "X"
            ? "./src/assets/emoji.png"
            : "./src/assets/pensando.png"
        }
      />
    </div>
  );
};
