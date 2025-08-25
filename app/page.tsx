import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import Skills from '../components/Skills'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Proyectos basados en la experiencia profesional de Pedro Molina Iboa
const featuredProjects = [
  {
    id: 1,
    title: 'Sistema de Gestión de Paquetería',
    description: 'Plataforma completa para empresas de mensajería y paquetería que automatiza todo el ciclo operativo desde la recepción hasta la entrega final. El sistema integra un módulo de facturación electrónica con certificación fiscal (CFDI), permitiendo la generación automática de comprobantes fiscales digitales y su timbrado en tiempo real.',
    image: '/images/projects/paqueteria.svg',
    technologies: ['C#, Vb.net', 'SQL Server', 'Visual Studio', '.NET Framework','https://korarastreo.azurewebsites.net/'],
    slug: 'sistema-paqueteria',
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'Sistema de Control de Turnos - Gobierno del Estado de Nayarit',
    description: 'Sistema especializado para la gestión eficiente de turnos y atención ciudadana en las oficinas de recaudación de rentas. Diseñado para optimizar los tiempos de espera y mejorar la experiencia del usuario en trámites vehiculares.',
    image: '/images/projects/recaudacion.svg',
    technologies: ['C#, Vb.net', 'SQL Server', 'Visual Studio', '.NET Framework'],
    slug: 'sistema-recaudacion',
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'Sistema de Control de Validaciones - Gobierno del Estado de Nayarit',
    image: '/images/projects/tenencias-validator.svg',
    technologies: ['Vb.Net', 'SQL Server', 'React', 'Js' , 'validaciones.nayarit.gob.mx'],
    slug: '#',
    github: '#',
    demo: '#'
  },
  {
    id: 4,
    title: 'Sistema de Cotizaciones Paquetería - Cotizador Digital de Envíos',
    description: 'Sistema que calcula automáticamente costos basándose en dimensiones, peso, destino y tipo de servicio, proporcionando presupuestos precisos en tiempo real',
    image: '/images/projects/shipping-calculator.svg',
    technologies: ['NextJs','https://kora-express-cotizador.vercel.app/'],
    slug: '#',
    github: '#',
    demo: '#'
  }
  
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Proyectos Destacados</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Aquí están algunos de mis proyectos más recientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Ver todos los proyectos
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Habilidades Técnicas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tecnologías y herramientas con las que trabajo diariamente
            </p>
          </div>
          <Skills />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Tienes un proyecto en mente?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Me encantaría escuchar sobre tu proyecto y cómo puedo ayudarte a hacerlo realidad.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Hablemos
          </Link>
        </div>
      </section>
    </>
  )
}