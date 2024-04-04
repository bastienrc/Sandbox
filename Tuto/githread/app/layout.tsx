import { Footer } from "@/src/features/layout/Footer";
import { Header } from "@/src/features/layout/Header";
import { ThemeProvider } from "@/src/theme/ThemeProvider";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Githread",
  description: "The social network for developer",
};

type LayoutProps = {
  children: React.ReactNode;
  modal?: React.ReactNode;
};

export default function RootLayout({ children, modal }: LayoutProps) {
  return (
    <html lang="en" className="h-full">
      <body className={clsx(inter.className, "h-full bg-background")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex h-full flex-col">
            <Header />
            <div className="m-auto w-full max-w-lg flex-1 py-16">
              {children}
            </div>
            <Footer />
          </div>
          {modal}
        </ThemeProvider>
      </body>
    </html>
  );
}
