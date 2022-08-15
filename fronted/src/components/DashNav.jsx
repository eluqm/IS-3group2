import { Disclosure } from '@headlessui/react'
import { useHistory } from 'react-router-dom'
import { deleteItemFromLSByIdent } from '../utils/utils'

const navigation = [
  { name: 'Dashboard', href: '/dash', current: true },
  { name: '+ Proyectos', href: '/addproj', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DashNav() {
  const history = useHistory();

  const outSession = () => {
    alert(`Hasta Pronto`);
    deleteItemFromLSByIdent('token');
    history.push('/');
  }

  const myPerfil = () => {
    history.push('/perfil');
  }

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="font-bold text-white text-2xl">BeResearcher</span>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-row justify-start hover:justify-between space-x-4'>
                    <a onClick={myPerfil} class="flex md:order-2">
                      <button type="button" class="text-white bg-cyan-800 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"> Mi Perfil </button>
                    </a>
                    <a onClick={outSession} class="flex md:order-2">
                      <button type="button" class="text-white bg-cyan-800 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-cyan-800"> Cerrar Sesión </button>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}
