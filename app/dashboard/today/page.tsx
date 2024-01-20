import { ListTasks } from "@/components/task/list-tasks";

const TodayPage = () => {
  return <ListTasks title="Today" isCompleted={false} doItNow />;
};

export default TodayPage;
