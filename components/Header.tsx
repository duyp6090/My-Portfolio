"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "My CV", href: "https://drive.google.com/file/d/1wysapKkN9oPECBx557XYkssHrcYDViL0/view?usp=sharing" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/home">
          <span className="text-2xl font-extrabold text-blue-600 hover:text-blue-700 transition">
            Duy.dev
          </span>
        </Link>

        <ul className="flex gap-8 text-sm md:text-base font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`py-1 transition ${
                  pathname === item.href
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "hover:text-blue-500"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
