import { FaCheck } from "react-icons/fa";

const DecisionBar: React.FC<{
  onLike: VoidFunction;
  onDislike: VoidFunction;
  disabled: boolean;
}> = ({ onLike, onDislike, disabled }) => {
  return (
    <div className="flex gap-6 m-4 justify-center">
      <button
        disabled={disabled}
        onClick={onDislike}
        className="btn text-2xl h-16 w-16"
      >
        ✖️
      </button>
      <button
        disabled={disabled}
        onClick={onLike}
        className="btn btn-primary text-xl h-16 w-16"
      >
        <FaCheck />
      </button>
    </div>
  );
};

export default DecisionBar;
