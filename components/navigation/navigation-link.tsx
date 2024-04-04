import Link from "next/link";

import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  name: string;
  path: string;
  isTarget?: boolean;
  className?: string;
}

const NavigationLink = ({
  children,
  name,
  path,
  isTarget,
  className,
}: Props) => {
  return (
    <Link
      href={path}
      className={cn(
        "flex p-2 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 hover:text-neutral-100 place-items-center gap-4 hover:bg-primary/20 transition-colors duration-100",
        isTarget &&
          "dark:bg-card bg-slate-200 border-r-4 border-emerald-500 rounded-r-lg",
        className
      )}
    >
      {children}
      <p className="text-inherit font-poppins overflow-clip whitespace-nowrap tracking-wide">
        {name}
      </p>
    </Link>
  );
};

export default NavigationLink;
