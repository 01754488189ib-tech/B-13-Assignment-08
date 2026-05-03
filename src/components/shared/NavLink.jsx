"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, className, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-3 py-1 rounded-full font-bold
        ${isActive
          ? "border border-blue-500 text-blue-600"
          : ""
        } 
        ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;