import { userSchema } from "../schemas/user";
import { useQuery, useQueryClient } from "react-query";
import { useState } from "react";

export const useProfile = ({ index }: { index: number }) => {
  const [decision, setDecision] = useState<"like" | "dislike" | null>(null);

  const queryClient = useQueryClient();

  const query = useQuery(
    ["user", index],
    async () => {
      if (index > 1) return null;

      const res = await fetch("https://blind8-three.vercel.app/api/v1/profile");
      const data = await res.json();

      const user = userSchema.parse(data.data);

      return user;
    },
    {
      staleTime: 1000 * 60 * 60,
    }
  );

  const onDecision = (decision: "like" | "dislike") => {
    setDecision(decision);
    const next = queryClient.getQueryData(["user", index + 1]);

    if (!next) {
      return;
    }

    setTimeout(() => {
      queryClient.setQueryData(["user", index], next);
      queryClient.setQueryData(["user", index + 1], null);
      queryClient.invalidateQueries(["user", index + 1]);
      setDecision(null);
    }, 240);
  };

  return { query, onDecision, decision };
};
