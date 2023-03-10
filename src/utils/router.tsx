import React, {
  ComponentType,
  createContext,
  JSXElementConstructor,
  lazy,
  LazyExoticComponent,
  Suspense,
  useCallback,
  useContext,
} from "react";

export type Pages = "chats" | "explore" | "profile" | "settings" | "convo";

export type PageContextType = {
  current: Pages;
  setPage: (page: Pages) => void;
};

const PageContext = createContext<PageContextType>({
  current: "chats",
  setPage: () => {},
});

export const usePageContext = () => {
  return useContext(PageContext);
};

export const PageProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [current, setCurrent] = React.useState<Pages>("chats");

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

  const wrapper = useCallback(
    (
      Page: LazyExoticComponent<ComponentType<any>> | JSXElementConstructor<{}>
    ) => {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <div className="px-4 flex-1">
            <Page />
          </div>
        </Suspense>
      );
    },
    []
  );

  switch (current) {
    case "chats":
      return wrapper(lazy(() => import("@/pages/chats")));
    case "convo":
      return wrapper(lazy(() => import("@/pages/convo")));
    case "explore":
      return wrapper(lazy(() => import("@/components/Magazine")));
    case "profile":
      return wrapper(ProfilePage);
    case "settings":
      return wrapper(SettingsPage);
    default:
      return wrapper(NotFound);
  }
};

const NotFound = () => {
  return <div>404</div>;
};

const ProfilePage = () => {
  return <div>profile page</div>;
};

const SettingsPage = () => {
  return <div>settings page</div>;
};
