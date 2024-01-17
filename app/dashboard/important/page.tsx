import { ModalWrapper } from "@/components/modal-wrapper";
import { CreateTaskForm } from "@/components/task/create-form";

const ImportantPage = () => {
  return (
    <div>
      Important Page
      <ModalWrapper buttonTriggerLabel="Click me" headerLabel="Create a Task">
        <CreateTaskForm />
      </ModalWrapper>
    </div>
  );
};

export default ImportantPage;
