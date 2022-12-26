import { DecisionBar } from "./DecisionBar";
import { useProfile } from "./queries/profile";

export const ProfileCard: React.FC<{ index?: number }> = ({ index = 0 }) => {
  const query = useProfile();

  const isFirst = !index;

  const className = isFirst ? "relative" : "absolute top-0";

  const style = {
    transform: isFirst
      ? "none"
      : `translateY(${index * 40}px) scale(${1 - index * 0.1})`,
    zIndex: 5 - index,
  } satisfies React.CSSProperties;

  if (query.isLoading) return <div>Loading...</div>;

  const data = query.data!;

  return (
    <div style={style} className={"card".concat(" ", className)}>
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
      <DecisionBar />
    </div>
  );
};

export default ProfileCard;
