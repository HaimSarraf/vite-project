const SelectorOption = ({
  option,
  color,
}: {
  option: string;
  color?: string;
}) => {
  return (
    <option
      style={{ backgroundColor: `${color}` }}
      className={`${color}` === "black" ? "text-white" : ""}
    >
      {option}
    </option>
  );
};
export default SelectorOption;
