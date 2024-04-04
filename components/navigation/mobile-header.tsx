import { MobileSidebar } from "./mobile-sidebar";

export const MobileHeader = () => {
  return (
    <nav className="md:hidden px-6 h-[50px] flex items-center w-full bg-primary-foreground">
      <h1 className="text-2xl font-bold mr-auto text-primary">Task Master</h1>
      <MobileSidebar />
    </nav>
  );
};
