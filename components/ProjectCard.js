import Image from 'next/image'
import Link from 'next/link'
import { Github, ExternalLink, Code, Database } from 'lucide-react'

export default function ProjectCard({ project }) {
  const getTechIcon = (tech) => {
    if (tech.includes('SQL') || tech.includes('Database')) return Database
    if (tech.includes('C#') || tech.includes('Visual Studio') || tech.includes('Python')) return Code
    return Code
  }

  return (
    <div className="group bg-white rounded-2xl shadow-professional overflow-hidden hover:shadow-professional-xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100">
      {/* Project Image */}
      <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div className="flex gap-3">
              {project.github && project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/95 backdrop-blur-sm p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label="Ver código en GitHub"
                >
                  <Github size={18} className="text-gray-700" />
                </a>
              )}
              {project.demo && project.demo !== '#' && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/95 backdrop-blur-sm p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label="Ver demo en vivo"
                >
                  <ExternalLink size={18} className="text-gray-700" />
                </a>
              )}
            </div>
            
            {/* Project type badge */}
            <div className="bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
              Proyecto Empresarial
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <div className="text-primary bg-blue-50 rounded-lg p-2 group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <Database size={16} />
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="space-y-3 mb-6">
          <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Tecnologías</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => {
              const Icon = getTechIcon(tech)
              return (
                <span
                  key={tech}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm rounded-lg font-medium hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
                >
                  <Icon size={14} />
                  {tech}
                </span>
              )
            })}
          </div>
        </div>

        {/* Project status and link */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">En producción</span>
          </div>
          
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-professional font-medium text-sm"
          >
            Ver detalles
            <ExternalLink size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}