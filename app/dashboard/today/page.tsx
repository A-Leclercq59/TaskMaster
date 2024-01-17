import { ListTasks } from "@/components/task/list-tasks";

const TodayPage = () => {
  return <ListTasks isCompleted={false} doItNow />;
};

export default TodayPage;
