import { FaCheck, FaClipboardList } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";

export const NavigationItems = [
  {
    label: "All Tasks",
    icon: <IoHomeSharp className="stroke-inherit stroke-[0.75] min-w-5 w-5" />,
    path: "/dashboard",
    targetSegment: null,
  },
  {
    label: "Important",
    icon: <FaListCheck className="min-w-5 w-5" />,
    path: "/dashboard/important",
    targetSegment: "important",
  },
  {
    label: "Completed",
    icon: <FaCheck className="min-w-5 w-5" />,
    path: "/dashboard/completed",
    targetSegment: "completed",
  },
  {
    label: "Do It Today",
    icon: <FaClipboardList className="min-w-5 w-5" />,
    path: "/dashboard/today",
    targetSegment: "today",
  },
];
