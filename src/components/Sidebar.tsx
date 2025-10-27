"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`${
        collapsed ? "w-12" : "w-64"
      } bg-[#252526] border-r border-[#2b2b2b] flex flex-col transition-all duration-300`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center h-9 border-b border-[#2b2b2b] px-2">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-6 h-6 flex items-center justify-center hover:bg-[#2a2d2e] rounded"
          >
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {!collapsed && (
          <div className="flex-1 overflow-y-auto scrollbar p-2">
            <div className="text-xs font-semibold text-gray-400 mb-2">EXPLORER</div>

            <div className="space-y-1">
              <div className="mb-3">
                <div className="text-xs text-gray-300 mb-1 flex items-center gap-1">
                  <span>▾</span>
                  <span className="font-semibold">About</span>
                </div>
                <div className="ml-4 space-y-1 text-xs">
                  <Link href="/">
                    <div className={`flex items-center gap-2 hover:text-gray-200 cursor-pointer ${pathname === "/" ? "text-white bg-[#37373d]" : "text-gray-400"}`}>
                      <span className="text-orange-400">■</span>
                      <span>index.html</span>
                    </div>
                  </Link>
                  <Link href="/Experience">
                    <div className={`flex items-center gap-2 hover:text-gray-200 cursor-pointer ${pathname === "/Experience" ? "text-white bg-[#37373d]" : "text-gray-400"}`}>
                      <span className="text-blue-400">■</span>
                      <span>experience.css</span>
                    </div>
                  </Link>
                  <Link href="/Skills">
                    <div className={`flex items-center gap-2 hover:text-gray-200 cursor-pointer ${pathname === "/Skills" ? "text-white bg-[#37373d]" : "text-gray-400"}`}>
                      <span className="text-yellow-400">■</span>
                      <span>skills.js</span>
                    </div>
                  </Link>
                  <Link href="/Projects">
                    <div className={`flex items-center gap-2 hover:text-gray-200 cursor-pointer ${pathname === "/Projects" ? "text-white bg-[#37373d]" : "text-gray-400"}`}>
                      <span className="text-blue-500">■</span>
                      <span>projects.ts</span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="mb-3">
                <div className="text-xs text-gray-300 mb-1 flex items-center gap-1">
                  <span>▾</span>
                  <span className="font-semibold">Side Projects</span>
                </div>
                <div className="ml-4 space-y-1 text-xs">
                  <Link href="/Projects">
                    <div className={`flex items-center gap-2 hover:text-gray-200 cursor-pointer ${pathname === "/Projects" ? "text-white bg-[#37373d]" : "text-gray-400"}`}>
                      <span className="text-yellow-400">■</span>
                      <span>AyeSoul.js</span>
                    </div>
                  </Link>
                  <Link href="/Projects">
                    <div className="flex items-center gap-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                      <span className="text-blue-500">■</span>
                      <span>AyeCreate.ts</span>
                    </div>
                  </Link>
                  <Link href="/Projects">
                    <div className="flex items-center gap-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                      <span className="text-blue-500">■</span>
                      <span>ChaiTeaChat.ts</span>
                    </div>
                  </Link>
                  <Link href="/Projects">
                    <div className="flex items-center gap-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                      <span className="text-yellow-400">■</span>
                      <span>AyeHigh.js</span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="mb-3">
                <div className="text-xs text-gray-300 mb-1 flex items-center gap-1">
                  <span>▾</span>
                  <span className="font-semibold">Contact</span>
                </div>
                <div className="ml-4 space-y-1 text-xs">
                  <Link href="/Email">
                    <div className={`flex items-center gap-2 hover:text-gray-200 cursor-pointer ${pathname === "/Email" ? "text-white bg-[#37373d]" : "text-gray-400"}`}>
                      <span className="text-red-400">■</span>
                      <span>Email.tsx</span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="mb-3">
                <div className="text-xs text-gray-300 mb-1 flex items-center gap-1">
                  <span>▾</span>
                  <span className="font-semibold">Misc</span>
                </div>
                <div className="ml-4 space-y-1 text-xs">
                  <Link href="/Hobbies">
                    <div className={`flex items-center gap-2 hover:text-gray-200 cursor-pointer ${pathname === "/Hobbies" ? "text-white bg-[#37373d]" : "text-gray-400"}`}>
                      <span className="text-blue-500">■</span>
                      <span>Blogs.py</span>
                    </div>
                  </Link>
                  <Link href="/Hobbies">
                    <div className="flex items-center gap-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                      <span className="text-purple-400">■</span>
                      <span>Gaming.sln</span>
                    </div>
                  </Link>
                  <Link href="/Anime">
                    <div className={`flex items-center gap-2 hover:text-gray-200 cursor-pointer ${pathname === "/Anime" ? "text-white bg-[#37373d]" : "text-gray-400"}`}>
                      <span className="text-yellow-400">■</span>
                      <span>Anime.jsx</span>
                    </div>
                  </Link>
                  <Link href="/Hobbies">
                    <div className="flex items-center gap-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                      <span className="text-blue-500">■</span>
                      <span>Learning.ts</span>
                    </div>
                  </Link>
                  <Link href="/Hobbies">
                    <div className="flex items-center gap-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                      <span className="text-yellow-400">■</span>
                      <span>Startup.js</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-[#2b2b2b] text-xs text-gray-500 space-y-1">
              <div>All Rights Reserved.</div>
              <div>Made in 2021.</div>
            </div>
          </div>
        )}

        <div className="mt-auto border-t border-[#2b2b2b]">
          <Link href="/" className="block p-2 hover:bg-[#2a2d2e] transition-colors">
            <svg className="w-5 h-5 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
