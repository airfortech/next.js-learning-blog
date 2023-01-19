import { ReactNode } from "react";
import { Navigation } from "../Navigation/Navigation";
import { navigationLinks } from "../Navigation/navigationLinks";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-slate-600 text-gray-50">
      <header className="p-4 bg-cyan-600 text-center">
        <Navigation navigationLinks={navigationLinks} />
      </header>
      <main className="p-4">{children}</main>
      <footer className="p-4 bg-cyan-600 text-center">Footer</footer>
    </div>
  );
};
