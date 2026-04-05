"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { ActionIcons } from "../layout/navbar/action-icons";
import { DesktopMenu } from "../layout/navbar/desktop-menu";
import { Logo } from "../layout/navbar/logo";
import { MobileMenu } from "../layout/navbar/mobile-menu";

export function MainNavbar() {
  const { scrollY } = useScroll();

  // Dynamic height and shadow based on scroll
  const navHeight = useTransform(scrollY, [0, 100], ["5.5rem", "4.5rem"]);
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.0)", "rgba(255, 255, 255, 0.8)"],
  );
  const navBackgroundDark = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0.0)", "rgba(10, 10, 10, 0.8)"],
  );
  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(244, 114, 182, 0.0)", "rgba(244, 114, 182, 0.1)"],
  );

  const navTop = useTransform(scrollY, [0, 40], ["2.5rem", "0rem"]);

  return (
    <motion.header
      style={{
        height: navHeight,
        top: navTop,
      }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-300",
        "before:absolute before:inset-0 before:backdrop-blur-md before:-z-10",
      )}
    >
      <motion.div
        style={{
          backgroundColor: navBackground,
          borderColor: navBorder,
        }}
        className="absolute inset-0 -z-10 border-b dark:hidden"
      />
      <motion.div
        style={{
          backgroundColor: navBackgroundDark,
          borderColor: navBorder,
        }}
        className="absolute inset-0 -z-10 border-b hidden dark:block"
      />

      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between gap-4 h-full">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <DesktopMenu />
        </div>

        {/* Right: Actions & Mobile Menu */}
        <div className="flex items-center gap-1">
          <ActionIcons />
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}
