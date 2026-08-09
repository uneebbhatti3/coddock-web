import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import QueryProvider from "@/providers/query-provider";
import { Toaster } from "@/components/ui/toast";

const polySans = localFont({
  src: [
    {
      path: "./fonts/polysanstrial-bulky.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/polysanstrial-median.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/polysanstrial-neutral.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-polysans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CodDock — Pakistan's Developer Platform | Learn, Grow, Earn",
  description:
    "CodDock is Pakistan's first all-in-one developer ecosystem. Learn to code, grow your skills through structured journeys, and unlock career and freelance earning opportunities. Powered by Next.js 15, Prisma, TailwindCSS, and more. Join the Pakistani developer revolution today!",
  keywords: [
    "CodDock",
    "Pakistan developer platform",
    "Learn to code Pakistan",
    "Next.js 15",
    "Full-stack development",
    "Prisma ORM",
    "TailwindCSS",
    "Pakistani tech jobs",
    "Developer community Pakistan",
    "AI coding Pakistan",
    "Freelance for devs Pakistan",
    "Programming tutorials Pakistan",
    "Software careers Pakistan",
  ],
  openGraph: {
    title: "CodDock — Pakistan's Developer Platform | Learn, Grow, Earn",
    description:
      "The definitive Pakistani ecosystem to Learn, Grow, and Earn as a developer. Connect, upskill, and accelerate your career with CodDock.",
    url: "https://coddock.vercel.app",
    type: "website",
    images: [
      {
        url: "https://coddock.vercel.app/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "CodDock Pakistani Developer Platform",
      },
    ],
    locale: "en_PK",
    siteName: "CodDock",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodDock — Pakistan's Developer Platform",
    description:
      "Join the CodDock community to learn, grow, and earn as a Pakistani developer!",
    images: ["https://coddock.vercel.app/twitter-image.jpg"],
  },
  metadataBase: new URL("https://coddock.vercel.app"),
  authors: [{ name: "CodDock Team", url: "https://coddock.vercel.app" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", polySans.className)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              {children}
              <Toaster />
            </TooltipProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
