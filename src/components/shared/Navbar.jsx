"use client";
import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { CgDanger } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="navbar backdrop-blur-md sticky top-0 z-50 px-4 md:px-12 h-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-gray-900 border border-gray-800 rounded-2xl w-64 gap-3"
          >
            <li><Link href="/category" className="text-gray-300 font-bold active:bg-blue-600">Home</Link></li>
            <li><Link href="/courses" className="text-gray-300 font-bold active:bg-blue-600">Courses</Link></li>
            <li><Link href="/about-us" className="text-gray-300 font-bold active:bg-blue-600">About</Link></li>
            <li><Link href="/career" className="text-gray-300 font-bold active:bg-blue-600">Career</Link></li>
            <li><Link href="/not-found" className="text-red-600 underline">Not Found</Link></li>
            <li className="mt-2 border-t border-gray-800 pt-2">
              <Link href="/login" className="bg-blue-600 text-white justify-center font-bold">Login</Link>
            </li>
          </ul>
        </div>

        <Link href="/category" className="flex items-center gap-2 ml-2">
          <span className="text-2xl font-bold tracking-tighter">
            Skill<span className="text-blue-500">Sphere</span>
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-8">
          <NavLink href="/category">Home</NavLink>
          <NavLink href="/courses">Courses</NavLink>
          <NavLink href="/about-us">About Us</NavLink>
          <NavLink href="/career">Career</NavLink>
          <NavLink href="/not-found" className="flex items-center gap-1 text-red-600 underline"><CgDanger /> Not Found</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/login" className="hidden sm:block">
          <button className="bg-blue-600 text-white px-8 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20 active:scale-95">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;