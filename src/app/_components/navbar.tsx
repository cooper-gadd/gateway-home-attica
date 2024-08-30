"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CommandMenu } from "./command-menu";
import { Logo } from "./logo";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    {
      title: "Events",
      href: "/events",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Hiring",
      href: "/hiring",
    },
    {
      title: "Donate",
      href: "/donate",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center gap-4 border-b border-border/40 bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Logo className="h-12 w-12" />
          <span className="sr-only">Gateway Home</span>
        </Link>
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "hover:text-foreground",
              pathname === item.href
                ? "text-foreground"
                : "text-muted-foreground",
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <SheetClose asChild>
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
              >
                <Logo className="h-12 w-12" />
                <span className="sr-only">Gateway Home</span>
              </Link>
            </SheetClose>
            {navItems.map((item) => (
              <SheetClose key={item.title} asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "hover:text-foreground",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {item.title}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <CommandMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
