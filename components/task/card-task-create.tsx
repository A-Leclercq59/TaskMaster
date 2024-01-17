import { IoMdAdd } from "react-icons/io";

import { Card, CardContent } from "../ui/card";

export const CardTaskCreate = () => {
  return (
    <Card className="w-[350px] min-h-[270px] flex items-center justify-center bg-primary-foreground shadow-md">
      <CardContent className="flex items-center gap-2">
        <IoMdAdd className="h-5 w-5" />
        Add New Task
      </CardContent>
    </Card>
  );
};
