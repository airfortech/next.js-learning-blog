import { NavigationLinks } from "@/types/NavigationLinks";
import Link from "next/link";

interface Props {
  navigationLinks: NavigationLinks[];
}

export const Navigation = ({ navigationLinks }: Props) => {
  return (
    <div className="">
      {navigationLinks.map(({ label, path }) => (
        <Link
          key={label}
          href={path}
          className="shadow p-2 m-1 bg-slate-700 hover:bg-slate-600 transition-colors"
        >
          {label}
        </Link>
      ))}
    </div>
  );
};
