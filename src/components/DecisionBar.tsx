import { FaCheck } from "react-icons/fa";

const DecisionBar: React.FC<{
  onDecision: (decision: "like" | "dislike") => void;
  disabled: boolean;
}> = ({ onDecision, disabled }) => {
  return (
    <div className="flex gap-6 m-4 justify-center">
      <button
        disabled={disabled}
        onClick={() => onDecision("dislike")}
        className="btn text-2xl h-16 w-16"
      >
        ✖️
      </button>
      <button
        disabled={disabled}
        onClick={() => onDecision("like")}
        className="btn btn-primary text-xl h-16 w-16"
      >
        <FaCheck />
      </button>
    </div>
  );
};

export default DecisionBar;
