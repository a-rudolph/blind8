import { cx } from "@/utils/classes";
import React, { useMemo } from "react";

type LoadingProps<T = any> = {
  className?: string;
  children?: React.ReactNode | ((data: NonNullable<T>) => React.ReactNode);
  data?: T;
};

const Loading = function <T = any>({
  className = "",
  children,
  data,
}: LoadingProps<T>) {
  const isLoading = Boolean(!data);

  const render = useMemo(() => {
    if (!data) return "...";

    if (typeof children === "function") return children(data);

    return children;
  }, [children, data]);

  return (
    <div className={cx(isLoading && "loading", isLoading && className)}>
      {render}
    </div>
  );
};

export default Loading;
