import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { geistMono, geistSans } from "@/lib/font";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

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
    "Software Engineer and MSc student in Big Data Engineering at the University of Amsterdam and Vrije Universiteit.",
  keywords: [
    "Meriç Mert Bulca",
    "Software Engineer",
    "Big Data Engineering",
    "University of Amsterdam",
    "Vrije Universiteit Amsterdam",
    "Sabanci University",
    "OBSS",
    "Amsterdam",
    "Turkey",
    "Software Development",
    "Personal Website",
    "Blog",
  ],
  openGraph: {
    title: "Meriç Mert Bulca",
    images: [
      {
        url: "https://www.mericbulca.com/og-image.png",
        width: 1200,
        height: 338,
        alt: "Meriç Mert Bulca Blog",
        type: "image/png",
      },
    ],
    description:
      "Software Engineer and MSc student in Big Data Engineering at the University of Amsterdam and Vrije Universiteit.",
    url: "https://www.mericbulca.com",
    siteName: "Meriç Mert Bulca",
    type: "website",
    locale: "en_US",
  },
};

const META_THEME_COLORS = {
  light: "#FFFFFF",
  dark: "#0a0a0a",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: META_THEME_COLORS.light },
    { media: "(prefers-color-scheme: dark)", color: META_THEME_COLORS.dark },
  ],
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-svh bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          {children}
        </ThemeProvider>
        {/* {TODO: Add Script for analytics} */}
      </body>
    </html>
  );
}
