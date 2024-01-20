import { ListTasks } from "@/components/task/list-tasks";

const ImportantPage = () => {
  return <ListTasks title="Important" isImportant isCompleted={false} />;
};

export default ImportantPage;
