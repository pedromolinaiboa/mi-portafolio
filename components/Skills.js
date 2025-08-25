'use client'

import { Database, Code, Server, Brain, FileText, Monitor } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Bases de Datos',
      icon: Database,
      skills: [
        { name: 'SQL Server', level: 95, description: 'Diseño, stored procedures, optimización' },
        { name: 'Database Design', level: 90, description: 'Modelado y arquitectura de datos' },
        { name: 'Query Optimization', level: 88, description: 'Optimización de consultas complejas' }
      ]
    },
    {
      title: 'Desarrollo',
      icon: Code,
      skills: [
        { name: 'Visual Studio', level: 95, description: 'Desarrollo de aplicaciones empresariales' },
        { name: 'C# .NET', level: 90, description: 'Aplicaciones de escritorio y web' },
        { name: 'Python', level: 50, description: 'Scripts y análisis de datos' },
        { name: 'React, Js, NextJs', level: 60, description: 'Desarrollo de aplicaciones web modernas utilizando el ecosistema JavaScript: React para interfaces de usuario interactivas y Next.js para aplicaciones full-stack con renderizado optimizado y funcionalidades avanzadas.' }
      ]
    },
    {
      title: 'Sistemas',
      icon: Server,
      skills: [
        { name: 'Arquitectura de Sistemas', level: 92, description: 'Diseño de soluciones empresariales' },
        { name: 'Integración de Sistemas', level: 88, description: 'Conexión entre aplicaciones' },
        { name: 'Administración DB', level: 85, description: 'Mantenimiento y respaldos' }
      ]
    }
  ]

  const certifications = [
    {
      name: 'MTA: Database Fundamentals',
      issuer: 'Microsoft',
      year: '2015',
      code: '98-364'
    }
  ]

  const recentTraining = [
     {
      name: 'JavaScript Intermedio-Avanzado',
      institution: 'Universidad UPEN',
      date: 'Junio 2025'
    },
    {
      name: 'JavaScript Intermedio',
      institution: 'Universidad UPEN',
      date: 'Junio 2024'
    },
    {
      name: 'JavaScript Básico',
      institution: 'Universidad UPEN',
      date: 'Junio 2023'
    },
    {
      name: 'Python Básico',
      institution: 'Universidad UPEN',
      date: 'Junio 2023'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Technical Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => {
          const Icon = category.icon
          return (
            <div key={category.title} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Icon className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Certifications & Training */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Certifications */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <FileText className="text-primary mr-3" size={24} />
            <h3 className="text-xl font-bold text-gray-900">Certificaciones</h3>
          </div>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                <p className="text-gray-600">{cert.issuer} • {cert.year}</p>
                <p className="text-sm text-gray-500">Código: {cert.code}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Training */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <Brain className="text-primary mr-3" size={24} />
            <h3 className="text-xl font-bold text-gray-900">Capacitación Reciente</h3>
          </div>
          <div className="space-y-4">
            {recentTraining.map((training) => (
              <div key={training.name} className="border-l-4 border-secondary pl-4">
                <h4 className="font-semibold text-gray-900">{training.name}</h4>
                <p className="text-gray-600">{training.institution}</p>
                <p className="text-sm text-gray-500">{training.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Highlight */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white">
        <div className="flex items-center mb-4">
          <Monitor className="mr-3" size={24} />
          <h3 className="text-xl font-bold">Experiencia Profesional</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-sm opacity-90">Años de Experiencia</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">2</div>
            <div className="text-sm opacity-90">Posiciones Actuales</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">100+</div>
            <div className="text-sm opacity-90">Proyectos Completados</div>
          </div>
        </div>
      </div>
    </div>
  )
}