import { useQueryClient } from "react-query";
import { useProfile } from "./queries/profile";

export const DecisionBar: React.FC = () => {
  const queryClient = useQueryClient();

  const { isFetching } = useProfile();

  const onDecision = () => {
    queryClient.invalidateQueries(["user"]);
  };

  return (
    <div className="flex gap-6 m-4 justify-center">
      <button
        disabled={isFetching}
        onClick={onDecision}
        className="btn text-xl h-16 w-16 border border-slate-200/50"
      >
        ✖️
      </button>
      <button
        disabled={isFetching}
        onClick={onDecision}
        className="btn btn-primary text-xl h-16 w-16"
      >
        🤍
      </button>
    </div>
  );
};
