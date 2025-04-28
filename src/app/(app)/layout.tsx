import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SidebarNav } from "@/components/layouts/sidebar-nav";
import { cn } from "@/lib/utils";
import { geistMono, geistSans } from "@/lib/font";

import "@/styles/globals.css";
import ContentHeader from "@/components/layouts/content-header";

export const metadata: Metadata = {
  title: "Meriç Mert Bulca",
  creator: "Meriç Mert Bulca",
  authors: [
    {
      name: "Meriç Mert Bulca",
      url: "https://linkedin.com/in/mericmertbulca",
    },
  ],
  description:
    "Software Engineer and MSc student in Big Data Engineering at the University of Amsterdam and Vrije Universiteit Amsterdam.",
  keywords: [
    "Meriç Mert Bulca",
    "Software Engineer",
    "Big Data Engineering",
    "University of Amsterdam",
    "Vrije Universiteit Amsterdam",
    "MSc",
    "Amsterdam",
    "Turkey",
    "Software Development",
    "Personal Website",
    "Portfolio",
    "Blog",
  ],
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "antialiased p-10 scroll-locked:!p-10",
          geistSans.variable,
          geistMono.variable,
          geistMono.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <SidebarNav />
            <SidebarInset>
              <ContentHeader />
              <main>{children}</main>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
