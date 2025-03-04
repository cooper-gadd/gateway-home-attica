"use client";

import { Logo } from "@/components/logo";
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

export function SiteHeader() {
  const pathname = usePathname();

  const navItems = [
    {
      title: "Events",
      href: "/events",
    },
    {
      title: "Volunteer",
      href: "/volunteer",
    },
    {
      title: "Donate",
      href: "/donate",
    },
    {
      title: "Employment",
      href: "/employment",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Leadership",
      href: "/leadership",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="sticky top-0 z-50 w-full border-dashed border-b border-border/70 dark:border-dashed bg-background">
      <div className="border-grid">
        <div className="container-wrapper">
          <header className="container h-16 flex items-center md:justify-center gap-4">
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
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
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
          </header>
        </div>
      </div>
    </div>
  );
}
