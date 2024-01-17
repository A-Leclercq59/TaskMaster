import { ListTasks } from "@/components/task/list-tasks";

const DashboardPage = async () => {
  return <ListTasks isCompleted={false} />;
};

export default DashboardPage;
