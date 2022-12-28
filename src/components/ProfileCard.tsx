import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import Loading from "@/components/Loading";
import DecisionBar from "@/components/DecisionBar";
import { useProfile } from "@/queries/use-profile";
import { cx } from "@/utils/classes";

const animations = {
  like: "animate-like",
  dislike: "animate-dislike",
} as const;

export const ProfileCard: React.FC<{
  index: number;
  shiftProfiles: VoidFunction;
  id: number;
}> = ({ index = 0, shiftProfiles, id: key }) => {
  const { query, onDecision, decision } = useProfile({
    key,
    shiftProfiles,
  });

  const isFirst = !index;

  const animation = decision
    ? animations[decision]
    : "transition-all duration-300";

  const style = {
    transform: `translateY(${index * 40}px) scale(${1 - index * 0.1})`,
    zIndex: 5 - index,
  } satisfies React.CSSProperties;

  const data = query.data;

  const loading = !data;

  return (
    <div style={style} className={cx("card absolute top-0", animation)}>
      <ImageWithPlaceholder
        height="332px"
        width="100%"
        src={data?.picture.large}
        loading={isFirst ? "eager" : "lazy"}
        className="object-cover w-full h-full rounded-md shadow-md"
      />
      <div className="text-lg py-2">
        {loading ? (
          <Loading className="w-1/3" />
        ) : (
          `${data?.name.first}, ${data?.dob.age}`
        )}
      </div>
      <div className="text-sm text-mono-2">
        {loading ? (
          <Loading className="w-1/2" />
        ) : (
          `${data?.location.city}, ${data?.location.country}`
        )}
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
