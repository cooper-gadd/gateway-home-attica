"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  CircleUser,
  Facebook,
  Home,
  Mail,
  Map,
  Menu,
  Phone,
  Printer,
  Search,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  ];

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle contact us menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Contact Us</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <a
              target="_blank"
              href="https://www.google.com/maps/search/?api=1&query=91 Main Street, Attica, NY 14011"
            >
              <DropdownMenuItem className="flex items-center gap-4">
                <Map className="h-5 w-5" />
                91 Main Street, Attica, NY 14011
              </DropdownMenuItem>
            </a>
            <a href="tel:585-708-4331">
              <DropdownMenuItem className="flex items-center gap-4">
                <Phone className="h-5 w-5" />
                585-708-4331
              </DropdownMenuItem>
            </a>
            <a href="fax:5857084333">
              <DropdownMenuItem className="flex items-center gap-4">
                <Printer className="h-5 w-5" />
                585-708-4333
              </DropdownMenuItem>
            </a>
            <a href="mailto:info@gatewayhomeattica.org">
              <DropdownMenuItem className="flex items-center gap-4">
                <Mail className="h-5 w-5" />
                info@gatewayhomeattica.org
              </DropdownMenuItem>
            </a>
            <a href="https://www.facebook.com/gatewayhomeattica/">
              <DropdownMenuItem className="flex items-center gap-4">
                <Facebook className="h-5 w-5" />
                Gateway Home
              </DropdownMenuItem>
            </a>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
