import { ListTasks } from "@/components/task/list-tasks";

const DashboardPage = async () => {
  return <ListTasks title="All Tasks" isCompleted={false} />;
};

export default DashboardPage;
