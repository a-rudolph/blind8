import Magazine from "@/components/Magazine";
import React, { createContext, useCallback, useContext } from "react";

export type Pages = "chats" | "explore" | "profile";

export type PageContextType = {
  current: Pages;
  setPage: (page: Pages) => void;
};

const PageContext = createContext<PageContextType>({
  current: "explore",
  setPage: () => {},
});

export const usePageContext = () => {
  return useContext(PageContext);
};

export const PageProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [current, setCurrent] = React.useState<Pages>("explore");

  const setPage = (page: Pages) => {
    setCurrent(page);
  };

  return (
    <PageContext.Provider value={{ current, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const Router = () => {
  const { current } = usePageContext();

  const wrapper = useCallback((page: React.ReactNode) => {
    return <div className="px-4 flex-1">{page}</div>;
  }, []);

  switch (current) {
    case "chats":
      return wrapper(<div>chats page</div>);
    case "explore":
      return wrapper(<Magazine />);
    case "profile":
      return wrapper(<div>profile page</div>);
    default:
      return wrapper(<div>404</div>);
  }
};
