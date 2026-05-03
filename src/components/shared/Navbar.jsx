"use client";
import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { CgDanger } from "react-icons/cg";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { FaUserNinja } from "react-icons/fa";
import { toast } from 'react-toastify';

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl rounded-2xl w-64 gap-3"
          >
            <li><Link href="/category" className="text-gray-900 font-bold active:bg-blue-600">Home</Link></li>
            <li><Link href="/courses" className="text-gray-900 font-bold active:bg-blue-600">Courses</Link></li>
            <li><Link href="/about-us" className="text-gray-900 font-bold active:bg-blue-600">About</Link></li>
            <li><Link href="/career" className="text-gray-900 font-bold active:bg-blue-600">Career</Link></li>
            <li><Link href="/not-found" className="text-red-600 underline">Not Found</Link></li>
            {!user && (
              <li className="mt-2 border-t border-gray-800 pt-2">
                <Link href="/login" className="bg-blue-600 text-white justify-center font-bold">Login</Link>
              </li>
            )}
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
          <NavLink href="/not-found" className="flex items-center gap-1 text-red-600 underline">
            <CgDanger /> Not Found
          </NavLink>
        </ul>
      </div>

      <div className="navbar-end">
        {isPending ? (
          <h2 className="mr-4 sm:mr-17"><span className="loading loading-spinner text-primary"></span></h2>
        ) : user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition-all"
            >
              <div className="relative">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt="user"
                    width={40}
                    height={40}
                    className="rounded-full shadow-md object-cover border-2 border-blue-500"
                  />
                ) : (
                  <div className="bg-gray-800 p-2 rounded-full border border-gray-700">
                    <FaUserNinja className="text-xl text-gray-400" />
                  </div>
                )}
              </div>
              <div className="text-center leading-tight">
                <h2 className="text-[10px] md:text-xs font-bold text-gray-400">
                  <span className="block sm:hidden">
                    <span className="font-semibold text-blue-600">Hi, </span>
                    {user.name ? user.name.split(" ")[0].substring(0, 8) : "User"}
                  </span>
                  <span className="hidden sm:block">
                    <span className="font-semibold text-blue-600">Welcome, </span>
                    {user.name || "User"}
                  </span>
                </h2>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl  backdrop-blur-md rounded-xl gap-1"
            >
              <li className="px-4 py-2 mb-1">
                <p className="text-xs text-gray-900 truncate">{user.email}</p>
              </li>
              <li>
                <button className="text-gray-900 hover:text-white">Dashboard</button>
              </li>
              <li>
                <button className="text-gray-900 hover:text-white">Settings</button>
              </li>
              <li>
                <button
                  onClick={async () => {
                    await authClient.signOut({
                      fetchOptions: {
                        onSuccess: () => {
                          toast.success("Successfully logged out! See you soon.");
                        },
                      },
                    });
                  }}
                  className="text-red-500 hover:bg-red-500/10">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link href="/login">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;