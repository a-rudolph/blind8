import { cx } from "@/utils/classes";

const Loading: React.FC<{ className?: string }> = ({ className = "" }) => {
  return <div className={cx("loading", className)}>loading...</div>;
};

export default Loading;
