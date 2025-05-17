import type { ReactNode } from "react";
import { Nav } from "./nav";
import { Sidebar } from "./sidebar";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <main className="grid grid-cols-12">
      <Sidebar />
      <div className="col-span-10">
        <Nav />
        {children}
      </div>
    </main>
  );
};

export { Layout };
