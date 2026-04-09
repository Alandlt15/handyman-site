"use client";
import { Menu, X } from "lucide-react";

export default function NavbarButton({ open, setOpen }) {
  return (
    <button
      className="md:hidden flex flex-row-reverse"
      onClick={() => setOpen(!open)}
    >
      {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      <span className="sr-only">Open main menu</span>
    </button>
  );
}
