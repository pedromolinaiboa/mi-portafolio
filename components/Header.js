'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre mí', href: '/about' },
    { name: 'Proyectos', href: '/projects' },
    { name: 'Contacto', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-primary transition-colors">
            {'<PedroMolina />'}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              {/* Descargar CV */}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="flex flex-col space-y-4 px-6 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-center"
              >
                Descargar CV
              </a> */}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}