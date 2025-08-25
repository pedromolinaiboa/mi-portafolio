'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    
    alert('¡Mensaje enviado correctamente! Te responderé pronto.')
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pedromolinaiboa@gmail.com',
      href: 'mailto:pedromolinaiboa@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Tepic, Nayarit, México',
      href: '#'
    },
    {
      icon: Clock,
      label: 'Horario',
      value: 'Lun - Vie: 9:00 AM - 6:00 PM',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/pedromolinaiboa',
      username: '@pedromolinaiboa'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pedro-molina-iboa-317099265',
      username: 'Pedro Molina Iboa'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <Link 
            href="/"
            className="inline-flex items-center text-primary hover:text-blue-600 mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Volver al inicio
          </Link>
          <h1 className="text-5xl font-bold mb-4 gradient-text">Contacto</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre tu idea y 
            discutir cómo puedo ayudarte a hacerla realidad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Availability Status */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <h2 className="text-2xl font-bold text-gray-900">Estado Actual</h2>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">✅ Disponible para proyectos</p>
                <p className="text-green-600 text-sm mt-1">
                  Actualmente acepto proyectos de desarrollo de sistemas y consultoría técnica
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.label}</p>
                        {item.href !== '#' ? (
                          <a 
                            href={item.href} 
                            className="text-gray-600 hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sígueme en</h2>
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                          {link.label}
                        </p>
                        <p className="text-gray-600">{link.username}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Servicios Disponibles</h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Desarrollo de Sistemas Empresariales',
                  'Aplicaciones Web con React/Next.js',
                  'Bases de Datos y SQL Server',
                  'Integración de Sistemas',
                  'Consultoría Técnica',
                  'Mantenimiento de Software'
                ].map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíame un Mensaje</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto, ideas o cualquier pregunta que tengas..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-600 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>

            {/* Response Time */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>⏱️ Tiempo de respuesta:</strong> Usualmente respondo dentro de 24-48 horas
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">¿Qué tipo de proyectos desarrollo?</h3>
              <p className="text-gray-600">
                Me especializo en sistemas empresariales, aplicaciones web, bases de datos y 
                soluciones gubernamentales. Trabajo con tecnologías Microsoft (.NET) y modernas como React.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">¿Cuál es mi tiempo de respuesta?</h3>
              <p className="text-gray-600">
                Respondo todos los emails dentro de 24-48 horas. Para proyectos urgentes, 
                puedes contactarme directamente y coordinaremos una llamada.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">¿Trabajo con equipos remotos?</h3>
              <p className="text-gray-600">
                Sí, tengo experiencia trabajando tanto presencialmente como de forma remota. 
                Utilizo herramientas modernas de colaboración para mantener una comunicación efectiva.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">¿Ofrezco mantenimiento post-desarrollo?</h3>
              <p className="text-gray-600">
                Absolutamente. Ofrezco servicios de mantenimiento, actualizaciones y soporte técnico 
                para todos los sistemas que desarrollo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}