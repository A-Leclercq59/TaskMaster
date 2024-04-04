"use client";

import { Menu } from "lucide-react";
import { useSelectedLayoutSegment } from "next/navigation";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { NavigationItems } from "./navigation-items";
import NavigationLink from "./navigation-link";

export const MobileSidebar = () => {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="px-4 z-[100]" side="right">
        <ul className="flex flex-col items-baseline gap-8 text-2xl mt-12">
          {NavigationItems.map((navigation, i) => (
            <SheetClose key={i} className="w-full" asChild>
              <NavigationLink
                name={navigation.label}
                path={navigation.path}
                isTarget={activeSegment === navigation.targetSegment}
                key={i}
                className={cn(
                  activeSegment === navigation.targetSegment &&
                    "dark:bg-primary/40"
                )}
              >
                {navigation.icon}
              </NavigationLink>
            </SheetClose>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
