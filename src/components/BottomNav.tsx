import { cx } from "@/utils/classes";
import { usePageContext } from "@/utils/router";
import { FaHeartbeat, FaUserCircle } from "react-icons/fa";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

const BottomNav: React.FC = () => {
  const { setPage, current } = usePageContext();

  return (
    <nav className="h-16 flex justify-between bg-white shadow-md items-center px-4 py-4">
      <div className="flex justify-around w-full">
        <NavButton
          icon={<HiChatBubbleLeftRight />}
          selected={current === "chats"}
          onClick={() => {
            setPage("chats");
          }}
          selectedClass="text-secondary-1"
        />
        <Divider />
        <NavButton
          icon={<FaHeartbeat />}
          selected={current === "explore"}
          onClick={() => {
            setPage("explore");
          }}
          selectedClass="text-primary-1"
        />
        <Divider />
        <NavButton
          icon={<FaUserCircle />}
          selected={current === "profile"}
          onClick={() => {
            setPage("profile");
          }}
          selectedClass="text-mono-2"
        />
      </div>
    </nav>
  );
};

const NavButton: React.FC<{
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
  selectedClass?: string;
}> = ({ icon, selected, onClick, selectedClass }) => {
  const baseClass = "transition-all";

  return (
    <button
      onClick={onClick}
      className={cx(
        "btn btn-ghost text-xl flex-1",
        baseClass,
        selected && selectedClass,
        selected && "text-3xl"
      )}
    >
      {icon}
    </button>
  );
};

const Divider: React.FC = () => {
  return <div className="w-px h-12 bg-mono-4" />;
};

export default BottomNav;
