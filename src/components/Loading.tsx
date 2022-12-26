const Loading: React.FC<{ className?: string }> = ({ className = "" }) => {
  return <div className={"loading".concat(" ", className)}>loading...</div>;
};

export default Loading;
