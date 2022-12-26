import { useQuery } from "react-query";
import { userSchema } from "./schemas/user";

export const ProfileCard: React.FC = () => {
  const query = useQuery(["user"], async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();

    const user = userSchema.parse(data.results[0]);

    return user;
  });

  if (query.isLoading) return <div>Loading...</div>;

  const data = query.data!;

  return (
    <div className="card">
      <img
        src={data.picture.large}
        loading="eager"
        className="object-cover w-full rounded-md shadow-md"
      />
      <div className="text-lg py-2">
        {data.name.first}, {data.dob.age}
      </div>
      <div className="text-sm text-slate-600">
        {data.location.city}, {data.location.country}
      </div>
    </div>
  );
};

export default ProfileCard;
