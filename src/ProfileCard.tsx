import { DecisionBar } from "./DecisionBar";
import { useProfile } from "./queries/use-profile";

const animations = {
  like: "animate-like",
  dislike: "animate-dislike",
} as const;

export const ProfileCard: React.FC<{ index?: number }> = ({ index = 0 }) => {
  const { query, onDecision, decision } = useProfile({ index });

  const isFirst = !index;

  const className = isFirst ? "relative" : "absolute top-0";
  const animation = decision ? animations[decision] : "animate-enter";

  const style = {
    transform: isFirst
      ? "none"
      : `translateY(${index * 40}px) scale(${1 - index * 0.1})`,
    zIndex: 5 - index,
  } satisfies React.CSSProperties;

  const data = query.data;

  return (
    <div
      style={style}
      className={"card".concat(" ", className, " ", animation)}
    >
      <img
        src={data?.picture.large}
        loading={isFirst ? "eager" : "lazy"}
        className="object-cover min-h-[332px] w-full rounded-md shadow-md"
      />
      <div className="text-lg py-2">
        {data?.name.first || "..."}, {data?.dob.age || "..."}
      </div>
      <div className="text-sm text-slate-600">
        {data?.location.city || "..."}, {data?.location.country || "..."}
      </div>
      <DecisionBar
        disabled={query.isFetching}
        onLike={() => {
          onDecision("like");
        }}
        onDislike={() => {
          onDecision("dislike");
        }}
      />
    </div>
  );
};

export default ProfileCard;
