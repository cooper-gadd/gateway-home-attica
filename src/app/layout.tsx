import "@/styles/globals.css";

import { Inter as FontSans } from "next/font/google";
import { type Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./_components/theme-provider";
import { Navbar } from "./_components/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Gateway Home Attica",
  description:
    "Gateway Home is established to give “comfort care” to people who are medically determined to be in their last stages of life (three months or less).",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="color-scheme: dark;">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <Navbar />
            <div className="container flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
