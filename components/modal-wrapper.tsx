"use client";

import { useState } from "react";
import { LuFileEdit } from "react-icons/lu";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CardCreateTask } from "./task/card-create-task";

interface ModalWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  type: "Create" | "Edit" | "Delete";
}

export const ModalWrapper = ({
  children,
  headerLabel,
  type,
}: ModalWrapperProps) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          {type === "Create" && <CardCreateTask />}
          {type === "Edit" && (
            <LuFileEdit className="h-5 w-5 hover:text-primary" />
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{headerLabel}</DialogTitle>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        {type === "Create" && <CardCreateTask />}
        {type === "Edit" && (
          <LuFileEdit className="h-5 w-5 hover:text-primary" />
        )}
      </DrawerTrigger>
      <DrawerContent className="p-4">
        <DrawerHeader className="text-left">
          <DrawerTitle>{headerLabel}</DrawerTitle>
        </DrawerHeader>
        {children}
        <DrawerFooter className="pt-2 px-0">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
