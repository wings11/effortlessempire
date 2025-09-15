'use client'

import { useState } from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full border-b border-yellow-200 bg-yellow-50/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">EE</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg lg:text-xl text-gray-900 leading-tight">
                <span className="block sm:hidden">Effortless Empire</span>
                <span className="hidden sm:block">Effortless Empire Co.,Ltd</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/services" className="text-gray-700 hover:text-yellow-600 font-medium px-3 py-2 rounded-md">
                      Services
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="text-gray-700 hover:text-yellow-600 font-medium px-3 py-2 rounded-md">
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/testimonials" className="text-gray-700 hover:text-yellow-600 font-medium px-3 py-2 rounded-md">
                      Testimonials
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/resources" className="text-gray-700 hover:text-yellow-600 font-medium px-3 py-2 rounded-md">
                      Resources
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/contact">
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full">
                        Contact
                      </Button>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex items-center p-2 rounded-md text-gray-700 hover:text-yellow-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-yellow-200 py-4">
            <div className="flex flex-col space-y-3">
              <Link href="/services" className="text-gray-700 hover:text-yellow-600 font-medium px-3 py-2 rounded-md">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-yellow-600 font-medium px-3 py-2 rounded-md">
                About / Mission
              </Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-yellow-600 font-medium px-3 py-2 rounded-md">
                Testimonials
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-yellow-600 font-medium px-3 py-2 rounded-md">
                Resources
              </Link>
              <Link href="/contact" className="mt-2">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full w-full">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
