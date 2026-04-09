"use client";
import NavbarButton from "./navigation-button";
import NavLinks from "./navigation-links";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full text-white">
      <nav className="flex flex-row flex justify-between px-6 py-8 bg-sky-700 md:px-30 md:pb-8">
        <Link href="/" onClick={() => setOpen(false)}>
          Your Logo
        </Link>
        <NavbarButton open={open} setOpen={setOpen} />
        <ul className="hidden md:flex flex-row gap-4 text-md pb-2">
          <li className="block py-1">
            <Link href="/services">Services</Link>
          </li>
          <li className="block py-1">
            <Link href="/about">About</Link>
          </li>
          <li className="block py-1">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="block">
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
