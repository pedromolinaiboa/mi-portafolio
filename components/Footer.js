import Link from 'next/link'
import { Github, Linkedin, Mail, BicepsFlexed } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/tunombre', label: 'GitHub' },
    { icon: Linkedin, href: 'www.linkedin.com/in/pedro-molina-iboa-317099265', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:tu-email@example.com', label: 'Email' }
  ]

  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre mí', href: '/about' },
    { name: 'Proyectos', href: '/projects' },
    { name: 'Contacto', href: '/contact' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{'<Pedro Molina Iboa />'}</h3>
            <p className="text-gray-400 mb-4">
              Desarrollador Frontend y BackEnd apasionado por crear soluciones de escritorio y Web.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="mailto:tu-email@example.com"
                  className="hover:text-white transition-colors"
                >
                  pedromolinaiboa@gmail.com
                </a>
              </li>
              <li>Tepic, Nayarit, México</li>
              <li>
                <a 
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {/* Descargar CV (PDF) */}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-1">
            © {currentYear} Pedro Molina Iboa   
            <BicepsFlexed size={16} className="text-red-500 mx-1" fill="currentColor" />
                Hecho con Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}