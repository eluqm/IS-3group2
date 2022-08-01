import { Popover } from '@headlessui/react'

const navigation = [
  { name: 'Product', href: '/login' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' }
]

export default function Nav() {
  return (
    <>
      <Popover>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/">
                  <span className="font-bold text-2xl">BeResearcher</span>
                </a>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
              ))}
              <a href="/login" className="font-medium text-cyan-700 hover:text-cyan-600">
                Log in
              </a>
            </div>
          </nav>
        </div>
      </Popover>
    </>
  )
};
