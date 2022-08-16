import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

export const facultades = [
    {id: 1, name: 'Ciencias Biológicas'}, 
    {id: 2, name: 'Enfermería'},
    {id: 3, name: 'Medicina'},
    {id: 4, name: 'Arquitectura y Urbanismo'},
    {id: 5, name: 'CS. Naturales y Formales'},
    {id: 6, name: 'Geología, Física y Minas'},
    {id: 7, name: 'Ingeniería Civil'},
    {id: 8, name: 'Ingeniería de Procesos'},
    {id: 9, name: 'Ingeniería de Producción y Servicios'},
    {id: 10, name: 'Filosofía y Humanidades'},
    {id: 11, name: 'Administración'},
    {id: 12, name: 'Agronomía'},
    {id: 13, name: 'Ciencias Contables y Financieras'},
    {id: 14, name: 'Ciencias de la Educación'},
    {id: 15, name: 'Ciencia Histórico Sociales'},
    {id: 16, name: 'Derecho'},
    {id: 17, name: 'Economía'},
    {id: 18, name: 'Psicología, Relaciones Industriales y Ciencias de la Comunicación'}
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