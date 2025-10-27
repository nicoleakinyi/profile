import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Raj Savaliya | Software Development Engineer",
  description: "VS code style developer portfolio showcasing skills of Full-Stack Developer with a focus on JavaScript and related technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col overflow-hidden">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto scrollbar bg-[#1e1e1e]">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
