"use client";

import { useState } from "react";
import { toast } from "sonner";
import { MdDelete } from "react-icons/md";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { deleteTask } from "@/actions/delete-task";

interface DeleteTaskDialogProps {
  taskId: string;
}

export const DeleteTaskDialog = ({ taskId }: DeleteTaskDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger>
        <MdDelete className="h-6 w-6 hover:text-destructive" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            task.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <form
            className="flex gap-3"
            action={async () => {
              await deleteTask(taskId).then((data) => {
                toast(data.success);
                onClose();
              });
            }}
          >
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="destructive" type="submit">
              Delete
            </Button>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
