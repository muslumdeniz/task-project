import type { ReactNode } from "react";
import { Nav } from "./nav";
import { Sidebar } from "./sidebar";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <main className="grid grid-cols-12 min-h-screen h-screen ">
      <Sidebar />
      <div className="col-span-10 flex flex-col h-screen">
        <Nav />
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </main>
  );
};
export { Layout };
