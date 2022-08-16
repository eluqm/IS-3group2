import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

export const facultades = [
    {id: 1, name: 'Ciencias Biológicas'}, 
    {id: 2, name: 'Enfermería'},
    {id: 3, name: 'Medicina'},
    {id: 5, name: 'Arquitectura y Urbanismo'},
    {id: 6, name: 'CS. Naturales y Formales'},
    {id: 7, name: 'Geología, Física y Minas'},
    {id: 8, name: 'Ingeniería Civil'},
    {id: 9, name: 'Ingeniería de Procesos'},
    {id: 10, name: 'Ingeniería de Producción y Servicios'},
    {id: 11, name: 'Filosofía y Humanidades'},
    {id: 12, name: 'Administración'},
    {id: 13, name: 'Agronomía'},
    {id: 14, name: 'Ciencias Contables y Financieras'},
    {id: 15, name: 'Ciencias de la Educación'},
    {id: 16, name: 'Ciencia Histórico Sociales'},
    {id: 17, name: 'Derecho'},
    {id: 18, name: 'Economía'},
    {id: 19, name: 'Psicología, Relaciones Industriales y Ciencias de la Comunicación'}
]

export const features = [
    {
      name: 'Posgrado',
      description:
        'El desarrollo de nuevas ideas surge en las conversación de otros profesionales y los trabajos que van realizando.',
      icon: GlobeAltIcon,
    },
    {
      name: 'Pregrado',
      description:
        'Unete a una investigación para que puedas ver el desarrollo de una investigación.',
      icon: ScaleIcon,
    },
    {
      name: 'Actualizado',
      description:
        'Be Researcher busca ser una fuente de recomendación para investigadores y futuros researchers.',
      icon: LightningBoltIcon,
    },
    {
      name: 'Conecta con Investigadores',
      description:
        'Be Researcher conecta a inestigadores de distintas áreas, universidades y grados',
      icon: AnnotationIcon,
    },
]

export const navigation = [
    { name: 'Título' },
    { name: 'Fecha Post' },
    { name: 'Financiación' },
    { name: 'Vacantes' },
    { name: 'Descripción' },
    { name: 'Likes' },
    { name: 'Acción' }
]

export const navigationD = [
    { name: 'Dashboard', href: '/dash', current: true },
    { name: '+ Proyectos', href: '/addproj', current: false }
]

export const headerNavigate = [
  { href: '/login', content: 'Investigador', div: 'rounded-md shadow', asty: 'text-white bg-cyan-700 hover:bg-cyan-800 md:py-4 md:text-lg md:px-10' },
  { href: '/projects', content: 'Estudiante', div: 'mt-3 sm:mt-0 sm:ml-3', asty: 'text-cyan-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10' }
]

export const navigationN = [
  { name: 'Home', href: '/' },
  { name: 'Estudiante', href: '#' },
  { name: 'Investigador', href: '/login' }
]