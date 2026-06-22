// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-xl font-bold text-indigo-600">RoaStand</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/product" className="text-gray-700 hover:text-indigo-600">Product</Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Buy Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link href="/product" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Product</Link>
          <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</Link>
          <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</Link>
          <button className="w-full text-left px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700">
            Buy Now
          </button>
        </div>
      )}
    </nav>
  );
}
