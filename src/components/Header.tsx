"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "About", href: "/" },
    { name: "Experience", href: "/Experience" },
    { name: "Skills", href: "/Skills" },
    { name: "Projects", href: "/Projects" },
    { name: "Contact", href: "/Email" },
    { name: "Hobbies", href: "/Hobbies" },
  ];

  return (
    <header className="w-full h-9 bg-[#323233] border-b border-[#2b2b2b] flex items-center justify-between px-2">
      <div className="flex items-center gap-2">
        <img
          src="https://ext.same-assets.com/1282326863/2285356906.png"
          alt="VS Code"
          className="w-5 h-5"
        />
        <ul className="flex items-center gap-1 text-xs text-gray-300">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`px-2 py-1 rounded hover:bg-[#2a2d2e] transition-colors ${
                  pathname === item.href ? "bg-[#1e1e1e]" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer" />
      </div>
    </header>
  );
}
