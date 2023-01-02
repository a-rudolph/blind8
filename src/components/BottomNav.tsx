import { cx } from "@/utils/classes";
import { useState } from "react";
import { FaHeartbeat, FaUserCircle } from "react-icons/fa";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

type Pages = "chats" | "explore" | "profile";

const BottomNav: React.FC = () => {
  const [selected, setSelected] = useState<Pages>("explore");

  const base = "transition-all";

  return (
    <nav className="flex justify-between bg-white shadow-md items-center px-4 py-4">
      <div className="flex justify-around w-full">
        <button
          onClick={() => {
            setSelected("chats");
          }}
          className="btn btn-ghost text-xl"
        >
          <HiChatBubbleLeftRight
            className={cx(
              base,
              selected === "chats" && "text-secondary-1 text-3xl"
            )}
          />
        </button>
        <Divider />
        <button
          onClick={() => {
            setSelected("explore");
          }}
          className="btn btn-ghost text-xl"
        >
          <FaHeartbeat
            className={cx(
              base,
              selected === "explore" && "text-primary-1 text-3xl"
            )}
          />
        </button>
        <Divider />
        <button
          onClick={() => {
            setSelected("profile");
          }}
          className="btn btn-ghost text-xl"
        >
          <FaUserCircle
            className={cx(base, selected === "profile" && "text-3xl")}
          />
        </button>
      </div>
    </nav>
  );
};

const Divider: React.FC = () => {
  return <div className="w-px h-8 bg-mono-4" />;
};

export default BottomNav;
