import Image from 'next/image'
import { Calendar, MapPin, GraduationCap, Briefcase, Code, Database } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Sobre Mí</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce más sobre mi trayectoria profesional, experiencia y pasión por el desarrollo de sistemas
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/profile.jpg"
                    alt="Pedro Molina Iboa"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-600">Años</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Pedro Molina Iboa</h2>
              <div className="flex items-center mb-4">
                <MapPin className="text-primary mr-2" size={20} />
                <span className="text-gray-600">Tepic, Nayarit, México</span>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Soy un <span className="font-semibold text-primary">Licenciado en Informática Administrativa</span> con más de
              15 años de experiencia en el desarrollo de sistemas empresariales. Mi pasión radica en crear
              soluciones tecnológicas que resuelvan problemas reales y mejoren la eficiencia operacional.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              A lo largo de mi carrera, me he especializado en el desarrollo de aplicaciones utilizando tecnologías
              Microsoft, particularmente <span className="font-semibold">C#, VB.NET y SQL Server</span>.
              Recientemente, he expandido mis conocimientos hacia tecnologías web modernas como
              <span className="font-semibold text-primary"> React y Next.js</span>.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {/* <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-primary">+</div>
                <div className="text-sm text-gray-600">Proyectos Completados</div>
              </div> */}
              {/* <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-primary">2</div>
                <div className="text-sm text-gray-600">Posiciones Actuales</div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Experiencia Profesional</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Briefcase className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">Desarrollador de Sistemas</h3>
                  <p className="text-primary font-medium">Gobierno del Estado de Nayarit</p>
                  <p className="text-gray-600 mb-3">2015 - Presente</p>
                  <p className="text-gray-700">
                    Desarrollo y mantenimiento de sistemas críticos para la administración pública,
                    incluyendo sistemas de control de turnos y validaciones de tenencias vehiculares.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Code className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">Desarrollador Freelance</h3>
                  <p className="text-secondary font-medium">Proyectos Independientes</p>
                  <p className="text-gray-600 mb-3">2010 - Presente</p>
                  <p className="text-gray-700">
                    Desarrollo de soluciones personalizadas para empresas del sector privado,
                    especializándome en sistemas de gestión de paquetería y facturación electrónica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Educación</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <GraduationCap className="text-white" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Licenciatura en Informática Administrativa</h3>
                <p className="text-green-600 font-medium">Instituto de Estudios Tecnologicos y Superiores Matatipac</p>
                <p className="text-gray-600 mb-3">Tepic, Nayarit</p>
                <p className="text-gray-700">
                  Formación integral en sistemas de información, desarrollo de software y
                  administración de recursos tecnológicos empresariales.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Training */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Capacitación Continua</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <Calendar className="text-primary mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900">JavaScript Intermedio-Avanzado</h3>
                  <p className="text-primary font-medium">Universidad UPEN</p>
                  <p className="text-gray-600">Junio 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <Calendar className="text-primary mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900">JavaScript Intermedio</h3>
                  <p className="text-primary font-medium">Universidad UPEN</p>
                  <p className="text-gray-600">Junio 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <Calendar className="text-primary mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900">JavaScript Básico</h3>
                  <p className="text-primary font-medium">Universidad UPEN</p>
                  <p className="text-gray-600">Junio 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <Calendar className="text-primary mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900">Python Básico</h3>
                  <p className="text-primary font-medium">Universidad UPEN</p>
                  <p className="text-gray-600">Junio 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <Calendar className="text-primary mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900">Certificaciones</h3>
                  <p className="text-primary font-medium">MTA: Database Fundamentals Sql Server</p>
                  <p className="text-gray-600">2015</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}