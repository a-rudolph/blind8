import { usePageContext } from "@/utils/router";
import { GoSettings } from "react-icons/go";

const Header: React.FC = () => {
  const { setPage } = usePageContext();

  return (
    <header className="flex justify-between items-center px-4 py-4">
      <div className="text-xl font-bold">
        blin<span className="text-primary-1">d8</span>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => setPage("settings")}
          className="btn btn-ghost text-2xl"
        >
          <GoSettings />
        </button>
      </div>
    </header>
  );
};

export default Header;
