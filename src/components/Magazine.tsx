import ProfileCard from "@/components/ProfileCard";
import { useRef, useState } from "react";

const Magazine: React.FC = () => {
  const count = useRef(0);

  const [profiles, setProfiles] = useState<typeof ProfileCard[]>([
    ProfileCard,
    ProfileCard,
    ProfileCard,
  ]);

  const shiftProfiles = () => {
    // remove the first profile and add a new one at end
    count.current++;

    setProfiles((profiles) => {
      const copy = [...profiles];
      copy.shift();

      return [...copy, ProfileCard];
    });
  };

  return (
    <div className="flex flex-col relative justify-center items-center h-full">
      {profiles.map((ProfileCard, index) => (
        <ProfileCard
          id={index + count.current}
          key={index + count.current}
          index={index}
          shiftProfiles={shiftProfiles}
        />
      ))}
    </div>
  );
};

export default Magazine;
