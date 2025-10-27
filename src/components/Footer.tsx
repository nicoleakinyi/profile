"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(now.toLocaleString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="h-6 bg-[#007acc] flex items-center justify-between px-3 text-white text-xs">
      <div className="flex items-center gap-3">
        <span>{currentTime}</span>
        <span>UTF-8</span>
        <span>Port: 443</span>
      </div>
      <div className="flex items-center gap-2">
        <span>Made in</span>
        <span>NEXT.JS</span>
        <span>TypeScript</span>
        <span>Tailwind</span>
        <span>React</span>
      </div>
    </footer>
  );
}
