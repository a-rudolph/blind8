import { cx } from "@/utils/classes";
import { lorem } from "@/utils/dummy";
import { useMemo } from "react";

const ConvoPage = () => {
  return (
    <div className="flex flex-col gap-6">
      {Array(8)
        .fill(1)
        .map((_message, i) => {
          return (
            <Message
              dir={i % 2 === 0 ? "left" : "right"}
              content={lorem.generateSentences(1)}
              key={i}
            />
          );
        })}
    </div>
  );
};

const Message: React.FC<{ dir: "left" | "right"; content: string }> = ({
  dir,
  content,
}) => {
  const isMe = dir === "left";

  const classes = isMe ? "bg-white" : "bg-primary-1 text-white";

  const justify = isMe ? "justify-end" : "justify-start";

  const avatar = useMemo(() => {
    return (
      <div
        className="rounded-full font-semibold min-w-[32px] min-h-[32px] max-h-[32px] bg-mono-3 text-white text-lg text-center"
        style={{ lineHeight: 2 }}
      >
        {isMe ? "M" : "Y"}
      </div>
    );
  }, [isMe]);

  return (
    <div className={cx(justify, "flex gap-2")}>
      {isMe || avatar}
      <div className={cx(classes, "p-2 rounded-lg shadow-md")}>{content}</div>
      {isMe && avatar}
    </div>
  );
};

export default ConvoPage;
