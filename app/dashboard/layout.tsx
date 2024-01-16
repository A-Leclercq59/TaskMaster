import { SideBar } from "@/components/navigation/side-bar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-10 flex flex-row w-full h-full">
      <div className="w-64 flex mr-10">
        <SideBar />
      </div>
      <div className="flex-1 border bg-primary-foreground rounded-xl shadow-md p-6">
        {children}
      </div>
    </div>
  );
};

export default DashBoardLayout;