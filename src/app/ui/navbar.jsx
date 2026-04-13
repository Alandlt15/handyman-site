"use client";
import NavbarButton from "./navigation-button";
import NavLinks from "./navigation-links";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full text-white">
      <nav className="flex flex-row justify-between px-6 md:px-40 bg-sky-700 h-26">
        <div className="overflow-hidden h-21 w-20 self-center md:flex md:items-center md:justify-center">
          <Link href="/" onClick={() => setOpen(false)}>
            <img
              src="/transparent-logo.svg"
              alt="logo"
              className="h-20 object-center w-auto bg-white scale-175"
            />
          </Link>
        </div>
        <NavbarButton open={open} setOpen={setOpen} />
        <ul className="hidden md:flex flex-row gap-4 text-md">
          <li className="pt-10">
            <Link href="/services">Services</Link>
          </li>
          <li className="pt-10">
            <Link href="/about">About</Link>
          </li>
          <li className="pt-10">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="pt-9">
            <Link href="/book">
              <button
                type="button"
                className="p-1 bg-sky-200 text-gray-700 cursor-pointer outline-none rounded-sm hover:bg-sky-300 transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
              >
                Book a Service
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      {/* {open && <NavLinks />} */}
      {open && <NavLinks setOpen={setOpen} />}
    </header>
  );
}
