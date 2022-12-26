import { userSchema } from "../schemas/user";
import { useQuery } from "react-query";

export const useProfile = () => {
  return useQuery(
    ["user"],
    async () => {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();

      const user = userSchema.parse(data.results[0]);

      return user;
    },
    {
      staleTime: 1000 * 60 * 60,
    }
  );
};
