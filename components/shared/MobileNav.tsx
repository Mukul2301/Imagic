"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link className="flex items-center gap-2" href="/">
        <Image
          src="/assets/image/logo-text.svg"
          alt="logo"
          height={180}
          width={28}
        />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                className="cursor-pointer"
                src="/assets/icons/menu.svg"
                alt="menu"
                height={32}
                width={32}
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image
                  src="/assets/images/logo-text.svg"
                  alt="logo"
                  height={23}
                  width={152}
                />
                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
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
                        <Link
                          className="sidebar-link cursor-pointer"
                          href={link.route}
                        >
                          <Image
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
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          <Button asChild className="button bg-purple-gradient">
            <Link href="/sign-in"></Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
