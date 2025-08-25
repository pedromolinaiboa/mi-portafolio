import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pedro Molina Iboa - Desarrollador de Sistemas',
  description: 'Portafolio personal de Pedro Molina Iboa, Licenciado en Informática Administrativa con más de 15 años de experiencia en desarrollo de sistemas',
  keywords: 'desarrollador sistemas, sql server, visual studio, python, javascript, informática administrativa, tepic nayarit',
  openGraph: {
    title: 'Pedro Molina Iboa - Desarrollador de Sistemas',
    description: 'Portafolio personal de Pedro Molina Iboa - Más de 15 años desarrollando soluciones tecnológicas',
    url: 'https://pedro-molina-portfolio.com',
    siteName: 'Pedro Molina Portfolio',
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}