import ProjectCard from '../../components/ProjectCard'
import { ArrowLeft, Filter, Search } from 'lucide-react'
import Link from 'next/link'

const allProjects = [
  {
    id: 1,
    title: 'Sistema de Gestión de Paquetería',
    description: 'Plataforma completa para empresas de mensajería y paquetería que automatiza todo el ciclo operativo desde la recepción hasta la entrega final. El sistema integra un módulo de facturación electrónica con certificación fiscal (CFDI), permitiendo la generación automática de comprobantes fiscales digitales y su timbrado en tiempo real.',
    longDescription: 'Esta solución empresarial revoluciona la gestión de paquetería mediante la automatización integral de procesos. Incluye módulos de rastreo en tiempo real, gestión de inventarios, optimización de rutas, y un completo sistema de reportes gerenciales. La integración con SAT permite cumplir con todas las obligaciones fiscales mexicanas de manera automatizada.',
    image: '/images/projects/paqueteria.svg',
    technologies: ['C#', 'VB.NET', 'SQL Server', 'Visual Studio', '.NET Framework'],
    category: 'Enterprise',
    year: '2020-2024',
    status: 'Activo',
    features: [
      'Facturación electrónica CFDI automatizada',
      'Rastreo en tiempo real de paquetes',
      'Gestión completa de inventarios',
      'Optimización automática de rutas de entrega',
      'Dashboard ejecutivo con métricas clave',
      'Integración con servicios web del SAT'
    ],
    slug: 'sistema-paqueteria',
    github: '#',
    demo: 'https://korarastreo.azurewebsites.net/',
    client: 'Empresa de Mensajería'
  },
  {
    id: 2,
    title: 'Sistema de Control de Turnos - Gobierno del Estado de Nayarit',
    description: 'Sistema especializado para la gestión eficiente de turnos y atención ciudadana en las oficinas de recaudación de rentas. Diseñado para optimizar los tiempos de espera y mejorar la experiencia del usuario en trámites vehiculares.',
    longDescription: 'Solución gubernamental que digitaliza y optimiza la atención ciudadana en oficinas públicas. El sistema reduce significativamente los tiempos de espera mediante la gestión inteligente de turnos, permite la reserva anticipada de citas, y proporciona estadísticas detalladas para la toma de decisiones administrativas.',
    image: '/images/projects/recaudacion.svg',
    technologies: ['C#', 'VB.NET', 'SQL Server', 'Visual Studio', '.NET Framework'],
    category: 'Government',
    year: '2018-2024',
    status: 'Activo',
    features: [
      'Sistema de turnos automatizado',
      'Reserva de citas online',
      'Dashboard de métricas de atención',
      'Integración con sistemas gubernamentales',
      'Notificaciones SMS y email',
      'Reportes estadísticos avanzados'
    ],
    slug: 'sistema-recaudacion',
    github: '#',
    demo: '#',
    client: 'Gobierno del Estado de Nayarit'
  },
  {
    id: 3,
    title: 'Sistema de Control de Validaciones - Gobierno del Estado de Nayarit',
    description: 'Plataforma digital para la validación y control de tenencias vehiculares del estado. Sistema crítico que garantiza la integridad y autenticidad de los documentos fiscales vehiculares.',
    longDescription: 'Sistema de alta seguridad que digitaliza el proceso de validación de tenencias vehiculares. Implementa múltiples capas de seguridad, validación cruzada con bases de datos federales, y genera certificados digitales con validez legal. Procesa miles de consultas diarias con alta disponibilidad.',
    image: '/images/projects/tenencias-validator.svg',
    technologies: ['VB.NET', 'SQL Server', 'React', 'JavaScript', 'Web Services'],
    category: 'Government',
    year: '2019-2024',
    status: 'Activo',
    features: [
      'Validación en tiempo real de documentos',
      'Integración con bases de datos federales',
      'Certificados digitales con firma electrónica',
      'API REST para consultas externas',
      'Sistema de auditoría completo',
      'Alta disponibilidad 24/7'
    ],
    slug: 'sistema-validaciones',
    github: '#',
    demo: 'https://validaciones.nayarit.gob.mx',
    client: 'Gobierno del Estado de Nayarit'
  },
  {
    id: 4,
    title: 'Sistema de Cotizaciones Paquetería - Cotizador Digital de Envíos',
    description: 'Aplicación web moderna que calcula automáticamente costos de envío basándose en dimensiones, peso, destino y tipo de servicio, proporcionando presupuestos precisos en tiempo real para empresas de paquetería.',
    longDescription: 'Herramienta digital que moderniza el proceso de cotización de envíos. Utiliza algoritmos avanzados para calcular precios considerando múltiples variables: distancia, peso volumétrico, tipo de servicio, seguro de mercancía, y costos adicionales. La interfaz intuitiva permite a los usuarios obtener cotizaciones instantáneas.',
    image: '/images/projects/shipping-calculator.svg',
    technologies: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'Vercel'],
    category: 'Web Application',
    year: '2024',
    status: 'Activo',
    features: [
      'Cálculo automático de costos de envío',
      'Interfaz responsive y moderna',
      'Múltiples tipos de servicio',
      'Cálculo de peso volumétrico',
      'Integración con mapas para distancias',
      'Exportación de cotizaciones en PDF'
    ],
    slug: 'cotizador-envios',
    github: '#',
    demo: 'https://kora-express-cotizador.vercel.app/',
    client: 'Empresa de Paquetería'
  }
]

const categories = ['Todos', 'Enterprise', 'Government', 'Web Application']

export default function Projects() {
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
          <h1 className="text-5xl font-bold mb-4 gradient-text">Mis Proyectos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una colección de proyectos que demuestran mi experiencia en desarrollo de sistemas empresariales, 
            aplicaciones gubernamentales y soluciones web modernas
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">{allProjects.length}</div>
            <div className="text-gray-600">Proyectos Destacados</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-500 mb-2">
              {allProjects.filter(p => p.status === 'Activo').length}
            </div>
            <div className="text-gray-600">Activos</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-500 mb-2">
              {allProjects.filter(p => p.category === 'Government').length}
            </div>
            <div className="text-gray-600">Gubernamentales</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-500 mb-2">15+</div>
            <div className="text-gray-600">Años Experiencia</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {allProjects.map((project) => (
            <div key={project.id} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-sm">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Year & Client */}
                  <div className="text-sm text-gray-500 mb-4">
                    <div>{project.year}</div>
                    <div className="font-medium">{project.client}</div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition-colors text-sm font-medium"
                      >
                        Ver Demo
                      </a>
                    )}
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-center hover:bg-gray-200 transition-colors text-sm font-medium"
                      >
                        Código
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">¿Interesado en colaborar?</h2>
            <p className="text-gray-600 mb-6">
              Estos proyectos representan solo una muestra de mi experiencia. 
              Si tienes un proyecto en mente, me encantaría discutir cómo puedo ayudarte.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Hablemos de tu proyecto
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}