"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useState } from "react";

import { NavigationItems } from "./navigation-items";
import NavigationLink from "./navigation-link";

const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
};

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSegment = useSelectedLayoutSegment();

  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      svgControls.start("open");
    } else {
      containerControls.start("close");
      svgControls.start("close");
    }
  }, [isOpen]);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.nav
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className="md:flex hidden bg-primary-foreground flex-col gap-20 p-5 h-full shadow shadow-neutral-600"
      >
        <div className="flex flex-row w-full justify-between place-items-center">
          <div className="truncate font-bold text-xl text-primary">
            Task Master
          </div>
          <button
            className="p-1 rounded-full flex"
            onClick={() => handleOpenClose()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8 stroke-neutral-200"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={svgVariants}
                animate={svgControls}
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {NavigationItems.map((navigation, index) => (
            <NavigationLink
              name={navigation.label}
              path={navigation.path}
              isTarget={activeSegment === navigation.targetSegment}
              key={index}
            >
              {navigation.icon}
            </NavigationLink>
          ))}
        </div>
      </motion.nav>
    </>
  );
};
