import { MobileHeader } from "@/components/navigation/mobile-header";
import { SideBar } from "@/components/navigation/side-bar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full h-full md:flex-row">
      <div className="flex">
        <MobileHeader />
        <SideBar />
      </div>
      <div className="flex-1 border-t-2 md:border bg-primary-foreground md:rounded-xl shadow-md p-6 md:m-10 overflow-auto h-auto">
        {children}
      </div>
    </div>
  );
};

export default DashBoardLayout;
