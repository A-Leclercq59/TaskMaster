"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useModal } from "@/hooks/use-modal-store";
import { EditTaskForm } from "../task/edit-task-form";

export const EditTaskModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const isModalOpen = isOpen && type === "editTask";
  const { task } = data;

  if (!task) {
    return null;
  }

  if (isDesktop) {
    return (
      <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit this task</DialogTitle>
          </DialogHeader>
          <EditTaskForm task={task} onClose={onClose} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isModalOpen} onOpenChange={onClose}>
      <DrawerContent className="p-4">
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit this task</DrawerTitle>
        </DrawerHeader>
        <EditTaskForm task={task} onClose={onClose} />
        <DrawerFooter className="pt-2 px-0">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
