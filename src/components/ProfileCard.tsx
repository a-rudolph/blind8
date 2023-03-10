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
  id: number;
  index: number;
  shiftProfiles: VoidFunction;
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
    transform: `translateY(${index * 48}px) scale(${1 - index * 0.1})`,
    zIndex: 5 - index,
  } satisfies React.CSSProperties;

  const data = query.data;

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
        <Loading className="w-1/3" data={data}>
          {(data) => {
            return (
              <>
                <span className="font-semibold">{data.name.first}, </span>
                <span>{data.dob.age} </span>
                <span className="text-sm text-mono-2">
                  {data.location.city}
                </span>
              </>
            );
          }}
        </Loading>
      </div>
      <div className="text-sm text-mono-2 h-16 overflow-hidden grad-mask">
        <Loading data={data}>
          {(data) => <div className="">{data.bio}</div>}
        </Loading>
      </div>
      <DecisionBar
        disabled={query.isFetching || !isFirst}
        onDecision={onDecision}
      />
    </div>
  );
};

export default ProfileCard;
