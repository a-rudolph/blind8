import { FaHeartbeat, FaUserCircle } from "react-icons/fa";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

const BottomNav: React.FC = () => {
  return (
    <nav className="flex justify-between bg-white shadow-md items-center px-4 py-4">
      <div className="flex justify-around w-full">
        <button className="btn btn-ghost text-xl">
          <FaHeartbeat />
        </button>
        <Divider />
        <button className="btn btn-ghost text-xl">
          <HiChatBubbleLeftRight />
        </button>
        <Divider />
        <button className="btn btn-ghost text-xl">
          <FaUserCircle />
        </button>
      </div>
    </nav>
  );
};

const Divider: React.FC = () => {
  return <div className="w-px h-8 bg-mono-4" />;
};

export default BottomNav;
