import ProfileCard from "./ProfileCard";

const Magazine: React.FC = () => {
  return (
    <div className="flex flex-col relative justify-center items-center h-full">
      <ProfileCard />
      <ProfileCard index={1} />
      <ProfileCard index={2} />
    </div>
  );
};

export default Magazine;
