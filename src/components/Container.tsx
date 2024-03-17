import { ReactNode } from "react";

type IContainerProps = {
  children: ReactNode;
};

export function Container({ children }: IContainerProps) {
  return (
    <div className="flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
      {children}
    </div>
  );
}
