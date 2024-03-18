"use client";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link className="sidebar-logo" href="/">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul>
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                    key={link.route}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        className={`${isActive} && brightness-200`}
                        src={link.icon}
                        alt="logo"
                        height={24}
                        width={24}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="sidebar-nav-elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                    key={link.route}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        className={`${isActive} && brightness-200`}
                        src={link.icon}
                        alt="logo"
                        height={24}
                        width={24}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <Button asChild className="button bg-purple-gradient">
              <Link href="/sign-in"></Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
