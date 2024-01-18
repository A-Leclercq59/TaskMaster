"use client";

import { useEffect, useState } from "react";

import { CreateTaskModal } from "@/components/modals/create-task-modal";
import { EditTaskModal } from "@/components/modals/edit-task-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateTaskModal />
      <EditTaskModal />
    </>
  );
};
