import { userSchema } from "@/schemas/user";
import { useQuery } from "react-query";
import { useState } from "react";
import { generateBio } from "@/utils/dummy";

export const useProfile = ({
  key,
  shiftProfiles,
}: {
  key: number;
  shiftProfiles: VoidFunction;
}) => {
  const [decision, setDecision] = useState<"like" | "dislike" | null>(null);

  const query = useQuery(
    ["user", key],
    async () => {
      const res = await fetch("https://blind8-three.vercel.app/api/v2/profile");
      const data = await res.json();

      const user = userSchema.parse({ ...data.data, bio: generateBio() });

      return user;
    },
    {
      staleTime: 1000 * 60 * 60,
    }
  );

  const onDecision = (decision: "like" | "dislike") => {
    setDecision(decision);

    setTimeout(() => {
      shiftProfiles();
    }, 240);
  };

  return { query, onDecision, decision };
};
