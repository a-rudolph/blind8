import { useProfile } from "./queries/profile";

export const ProfileCard: React.FC = () => {
  const query = useProfile();

  if (query.isLoading) return <div>Loading...</div>;

  const data = query.data!;

  return (
    <div className="card">
      <img
        src={data.picture.large}
        loading="eager"
        className="object-cover min-h-[332px] w-full rounded-md shadow-md"
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
