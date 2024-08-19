"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Home, Menu, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Events",
      href: "/events",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Volunteer",
      href: "/volunteer",
    },
    {
      title: "Employment",
      href: "/employment",
    },
    {
      title: "Donate",
      href: "/donate",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Policies",
      href: "/policies",
    },
  ];

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Home className="h-6 w-6" />
          <span className="sr-only">Gateway Home Attica</span>
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
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Home className="h-6 w-6" />
              <span className="sr-only">Gateway Home Attica</span>
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
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
      </div>
    </header>
  );
}
