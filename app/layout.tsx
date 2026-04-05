import { AnnouncementBar } from "@/components/landing-page/announcement-bar";
import { MainNavbar } from "@/components/shared/main-navbar";
import { cn } from "@/lib/utils";
import { AppProvider } from "@/provider/app-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beauty Shop | Professional E-commerce",
  description: "Your ultimate destination for curated beauty products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        playfair.variable,
        "font-sans",
        inter.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <AppProvider>
          <AnnouncementBar />
          <MainNavbar />
          <main className="flex-1 pt-32">{children}</main>
        </AppProvider>
      </body>
    </html>
  );
}
