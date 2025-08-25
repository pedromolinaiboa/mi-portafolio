'use client'

import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialLinks = [
    { icon: Github, href: 'https://github.com/pedromolinaiboa', label: 'GitHub' },
    { icon: Linkedin, href: 'www.linkedin.com/in/pedro-molina-iboa-317099265', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:pedromolinaiboa@gmail.com', label: 'Email' }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 shadow-professional">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Disponible para proyectos
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Pedro</span>
              <br />
              <span className="gradient-text">Molina Iboa</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-gray-700 mb-6 font-medium">
              Desarrollador de Sistemas
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <span className="font-semibold text-gray-800">Licenciado en Informática Administrativa</span> con más de 
              <span className="font-semibold text-primary"> 15 años de experiencia</span> diseñando e implementando 
              soluciones tecnológicas empresariales de alta calidad.
            </p>
            
            <div className="flex items-center justify-center lg:justify-start mb-8 text-sm text-gray-600">
              <div className="flex items-center mr-6">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Tepic, Nayarit, México</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>15+ años de experiencia</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link 
                href="/projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl font-semibold shadow-professional-lg hover:shadow-professional-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="relative z-10">Ver Proyectos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link 
                href="/contact"
                className="group px-8 py-4 bg-white text-primary border-2 border-primary rounded-xl font-semibold shadow-professional hover:shadow-professional-lg hover:bg-primary hover:text-white transform hover:-translate-y-1 transition-all duration-300"
              >
                Contactar
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-white rounded-full shadow-professional hover:shadow-professional-lg hover:-translate-y-2 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    aria-label={link.label}
                  >
                    <Icon size={20} className="text-gray-700 group-hover:text-primary transition-colors duration-300" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Image/Avatar */}
          <div className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm opacity-40"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-professional-xl bg-white p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src="/images/profile.jpg"
                    alt="Pedro Molina Iboa"
                    fill
                    className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
              
              {/* Professional badges */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-professional-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">Disponible</span>
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-professional-lg">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">15+</div>
                  <div className="text-xs text-gray-600">Años</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-xs text-gray-500 mb-2">Desplazar hacia abajo</span>
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </div>
    </section>
  )
}