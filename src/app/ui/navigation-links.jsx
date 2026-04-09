"use client";
import Link from "next/link";
export default function NavLinks({ setOpen }) {
  return (
    <nav className="absolute z-10 flex flex-col flex justify-between w-full py-1 bg-sky-700 delay-700">
      <ul className="flex flex-col gap-2 text-xs pl-6 pb-2">
        <li className="block py-1 text-lg">
          <Link href="/services" onClick={() => setOpen(false)}>
            Services
          </Link>
        </li>
        <li className="block py-1 text-lg">
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
        </li>
        <li className="block py-1 text-lg">
          <Link href="/projects" onClick={() => setOpen(false)}>
            Projects
          </Link>
        </li>
      </ul>
      <Link
        href="/book"
        onClick={() => setOpen(false)}
        className="flex justify-center items-center pb-3"
      >
        <button className="rounded-sm bg-sky-300 w-90 h-10 text-gray-700">
          Book a Service
        </button>
      </Link>
    </nav>
  );
}
