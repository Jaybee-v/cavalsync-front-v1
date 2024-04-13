"use client";
import { Home, Info } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NavbarMobile = () => {
  const path = usePathname();
  return (
    <div className="btm-nav">
      <Link href="/" className={`${path === "/" ? "active" : ""}`}>
        <Home />
        <span className="btm-nav-label">Accueil</span>
      </Link>
      {/* <Link href={"/"} className={`${path === "/" ? "active" : ""}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="btm-nav-label">Warnings</span>
      </Link> */}
      <Link href={"/about"} className={`${path === "/about" ? "active" : ""}`}>
        <Info />
        <span className="btm-nav-label">A propos</span>
      </Link>
    </div>
  );
};
